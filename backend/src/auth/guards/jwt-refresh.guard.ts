import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class JwtRefreshGuard extends AuthGuard('jwt-refresh'){
    handleRequest(err: any, user: any, info: any){
        if(err || !user){
            throw err || new UnauthorizedException('No se encuentra autorizado');
        }
        return user;
    }
}