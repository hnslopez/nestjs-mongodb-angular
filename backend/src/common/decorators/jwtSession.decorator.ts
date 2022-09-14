import { applyDecorators, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { ACGuard, Role, UseRoles } from 'nest-access-control';
import { AuthenticatedGuard, JwtAuthGuard } from 'src/auth/guards';
import { RouterGuard } from 'src/auth/guards/router.guard';

export function JWTSession(...roles: Role[]) {
  return applyDecorators(
    UseRoles(...roles),
    UseGuards( JwtAuthGuard,RouterGuard, ACGuard),
    ApiBearerAuth(),
  );
}
