import { Controller, Get, Post, UseGuards, Request, HttpCode, HttpStatus, Req, Body, Res, UnauthorizedException  } from '@nestjs/common';
import { AppService } from './app.service';
import { GuestGuard, JwtAuthGuard, LocalAuthGuard } from './auth/guards';
import { JWTSession, Session, User } from 'src/common/decorators';
import { IUser } from './users/interface/user.interface';
import { JwtLocalAuthGuard } from './auth/guards/jwt-local-auth.guard';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from '@nestjs/passport';
import { IRefreshHash } from './users/interface/refresh.interface';
import { JwtRefreshGuard } from './auth/guards/jwt-refresh.guard';
import { Response } from 'express';
import { IUserHash } from './common/types/refresh.type';
import { JwtNoAuthGuard } from './auth/guards/jwt-no-auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @UseGuards(JwtNoAuthGuard,JwtLocalAuthGuard)
  @Post('auth/v2/login')
  async loginJWT(@User() user: IUser, @Res({passthrough:true}) res: Response) {

    const data = await this.authService.login(user);

    res.cookie('Authorization', data.refresh_token,{httpOnly: true,signed:true, sameSite:true, secure:true})
   
    delete data.refresh_token;
    return data;
  }

  
  @UseGuards(JwtAuthGuard)
  @JWTSession()
  @Get('auth/v2/logout')
  @HttpCode(HttpStatus.OK)
  async LogoutJWT(@User() user: IUser, @Res() res) {
    
    await this.authService.logout(user);

    //TODO: VER COMO LIMPIAR LA COOKIE
   // res.clearCookie('Authorization');

    return res.status(HttpStatus.OK).json({
      message:'desconectado'
    });
  }

  @UseGuards(JwtRefreshGuard)
  @Post('auth/v2/refresh')
  @HttpCode(HttpStatus.OK)
  async refreshTokens(@User() user: IUserHash,
  @Res({ passthrough: true }) res: Response
  ) {
    const data = await this.authService.refreshToken(user.sub,user.token);
    res.cookie('Authorization', data.refresh_token,{httpOnly: true,signed:true, sameSite:true, secure:true})
   
    delete data.refresh_token;
    return data;
  }

}
