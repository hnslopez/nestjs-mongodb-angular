import { BadRequestException, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from 'src/users/users.service';
import { Request } from 'express';

@Injectable()
export class RtStrategy extends PassportStrategy(Strategy,'jwt-refresh') {
  constructor(private userService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([(request:Request)=>{
        let data = request?.signedCookies.Authorization;
        if(!data){
          return null;
        }
        return data;
      }]),
      secretOrKey: process.env.JWT_REFRESH_TOKEN_SECRET,
      passReqToCallback:true,
      
    });
  }
  async validate(req: Request, payload: any) {
    if(!payload){
        throw new BadRequestException('No se encuentra autorizado');
    }
    
    let data = req?.signedCookies.Authorization;

    if(!data){
      throw new BadRequestException('No se encuentra autorizado');
    }
    // const refreshToken = req.get('authorization').replace('Bearer','').trim();
    return {token:data, sub:payload.sub};
  }
}
