import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RolesSchema } from './schemas/roles.schema';

@Module({  
  imports:[
  MongooseModule.forFeature([
    {name:'Roles', schema: RolesSchema},

])],
  controllers: [RolesController],
  providers: [RolesService]
})
export class RolesModule {}
