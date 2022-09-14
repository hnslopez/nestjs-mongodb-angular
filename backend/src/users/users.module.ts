import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
import { ProfileSchema } from './schemas/profile.schema';
import { HashSchema } from './schemas/hash.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name:'User', schema: UserSchema},
      {name:'Profile', schema: ProfileSchema},
      {name:'Hash', schema: HashSchema}
    ])
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports:[UsersService]
})
export class UsersModule {}
