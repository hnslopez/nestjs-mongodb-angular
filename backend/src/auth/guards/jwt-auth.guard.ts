import { ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt'){

    handleRequest(err: any, user: any, info: any){
        if(err || !user){
            throw err || new UnauthorizedException('No se encuentra autorizado');
        }
        return user;
    }
}