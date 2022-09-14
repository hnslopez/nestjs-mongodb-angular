import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { SessionSerializer } from './serializer/session.serializer';
import { JwtStrategy } from './strategies/jwt.strategy';
import { localStrategy } from './strategies/local.strategy';
import { RtStrategy } from './strategies/rt.strategy';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PassportModule.register({
      defaultStrategy: 'jwt', //jwt
    }),
    UsersModule,
    PassportModule,
    PassportModule.register({ session: true }),
    JwtModule.register({
    // secret: process.env.JWT_SECRET,
    //  signOptions: { expiresIn: '60m' },
    }),
  ],

  providers: [AuthService, localStrategy, SessionSerializer, JwtStrategy, RtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
