import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AccessControlModule } from 'nest-access-control';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { roles } from './app.roles';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { BranchModule } from './branch/branch.module';
import { PermissionModule } from './permission/permission.module';
import { RolesModule } from './roles/roles.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { RouterModule } from './router/router.module';

@Module({
  imports: [
    AccessControlModule.forRoles(roles),

    ConfigModule.forRoot({ 
      isGlobal:true,
      envFilePath:'.env'
     }), 
     ThrottlerModule.forRoot({
      ttl: 60,
      limit: 100,
    }),
    MongooseModule.forRoot(process.env.DATABASE_HOST,{useNewUrlParser: true}),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    CacheModule.register({
      isGlobal: true,
      ttl:0,
      limit:100
    }),
    AuthModule, 
    UsersModule, BranchModule, PermissionModule, RolesModule, RouterModule],
  controllers: [AppController],
  providers: [AppService,{ provide: APP_GUARD, useClass: ThrottlerGuard }],
})
export class AppModule {}
