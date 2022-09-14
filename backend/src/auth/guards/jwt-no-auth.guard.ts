import { ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";

@Injectable()
export class JwtNoAuthGuard extends AuthGuard('jwt'){


    handleRequest(err: any, user: any, info: any){
        if(user){
            throw new UnauthorizedException('No se encuentra autorizado');
        }
        return user;
    }
}