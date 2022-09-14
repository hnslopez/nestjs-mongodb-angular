import { applyDecorators, UseGuards } from "@nestjs/common";
import { ApiBearerAuth } from "@nestjs/swagger";
import { ACGuard, Role, UseRoles } from "nest-access-control";


export function Auth(...roles:Role[]){
    return applyDecorators(
        UseRoles(...roles),
        UseGuards(ACGuard),
        ApiBearerAuth()
    )
}