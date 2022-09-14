import { Module } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { PermissionController } from './permission.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PermissionSchema } from './schemas/permission.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name:'Permission', schema: PermissionSchema},

  ])],
  controllers: [PermissionController],
  providers: [PermissionService]
})
export class PermissionModule {}
