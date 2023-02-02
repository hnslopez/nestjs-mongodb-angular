import { ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { HashHelper } from 'src/common/helper';
import { IUser } from 'src/users/interface/user.interface';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UsersService,
        private jwtService: JwtService) { }

    async validateUsername(username: string, password: string): Promise<any> {
        const user = await this.userService.getUserByUsername(username);
        if (!user) throw new UnauthorizedException('El usuario o la contraseña con invalidos.');
        if (user && await HashHelper.compare(password, user.password)) {
            user.password= null;
            return user;
        }
        return null;
    }

    async login(user: IUser) {
        
        const { _id } = user;
        if(!_id) throw new UnauthorizedException('No se encuentra autorizado');

        const tokens = await this.getToken(_id);
        await this.updateRefreshToken(_id, tokens.refresh_token);
        return tokens;
    }

    async logout(user: IUser) {
        const userToken = await this.userService.getfreshToken(user._id);
        if (!userToken) throw new ForbiddenException('No se encuentra autorizado');

        const hash = await this.userService.deleteHashToken(user._id);
    }

    async refreshToken(_id: string, refreshToken: string) {
        const userToken = await this.userService.getfreshToken(_id);
        if (!userToken) throw new ForbiddenException('No se encuentra autorizado');

        const match = await HashHelper.compareHashRefreshToken(userToken.hashRefreshToken, refreshToken);

        if (!match) throw new ForbiddenException('No se encuentra autorizado');

        const tokens = await this.getToken(_id);
        await this.updateRefreshToken(_id, tokens.refresh_token);
        return tokens;
    }

    async getToken(_id: string, roles?: string[]) {

        const [token, refresh] = await Promise.all([
            this.jwtService.signAsync({
                sub: _id,

            }, {
                secret: process.env.JWT_SECRET,
                expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRATION_TIME
            }),
            this.jwtService.signAsync({
                sub: _id,
            }, {
                secret: process.env.JWT_REFRESH_TOKEN_SECRET,
                expiresIn: process.env.JWT_REFRESH_EXPIRATION_TIME
            })
        ]);

        return {
            access_token: token,
            refresh_token: refresh,
            nonce:''
        }


    }

    async updateRefreshToken(_id: string, refreshToken: string) {
        const hash = await HashHelper.hashRefreshToken(refreshToken);
        await this.userService.updateOrCreateHashToken(_id, hash);

    }

}

