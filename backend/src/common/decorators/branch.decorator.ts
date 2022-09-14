import { ForbiddenException, BadRequestException, createParamDecorator, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import mongoose from "mongoose";
import { HashHelper } from "../helper";

export const Branch = createParamDecorator(
    async (data:string, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        const branch = request.headers.code;    
        if(!branch) throw new BadRequestException();
        const id =  await HashHelper.decryptToken(branch);

        if(!id) throw new UnauthorizedException('No se encuentra autorizado');
        if(!mongoose.Types.ObjectId.isValid(id)) throw new UnauthorizedException('No se encuentra autorizado');
        return id;
    }
)