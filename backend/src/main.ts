import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { Logger, ValidationPipe } from '@nestjs/common';
import * as session from 'express-session';
import * as passport from 'passport';
import * as cookieParser from 'cookie-parser';
import { GlobalService } from './common/services/global.service';
const MongoStore = require('connect-mongo')

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.use(helmet());
  app.enableCors({
    origin: ['http://localhost:4200','http://localhost:8081'],
    credentials: true,
  });
  app.enableVersioning();
  app.use(
    session({ 
      secret:process.env.DATABASE_SESSION_SECRET,
      resave:false,
      saveUninitialized:false,
      cookie:{  secure:'auto', maxAge: 3600000 },
      store: MongoStore.create({
        mongoUrl: process.env.DATABASE_HOST, 
        crypto: {
          secret: process.env.DATABASE_SESSION_CRYPTO 
        },
        dbName: process.env.DATABASE_NAME, 
        stringify: false
      })  
    }),
  ); 

  app.useGlobalPipes(new ValidationPipe({whitelist: true, transform: true}));
  app.setGlobalPrefix('api');
  app.use(cookieParser(process.env.COOKIE_SECRET));
  app.use(passport.initialize());
  app.use(passport.session());


  await app.listen(process.env.PORT || 4000);

  const server = app.getHttpServer();
  const router = server._events.request._router;

  const Routes: [] = router.stack.map(layer => {
    if (layer.route) {
      return {
        route: {
          path: layer.route?.path,
          method: layer.route?.stack[0].method,
        },
      };
    }
  }).filter(item => item !== undefined);

  GlobalService.routes = Routes;

  return process.env.PORT || 4000;
}

bootstrap().then((port: string) => {
  Logger.log(`Application running on port: ${port}`, 'Main');
});
