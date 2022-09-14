import { Module } from '@nestjs/common';
import { BranchService } from './branch.service';
import { BranchController } from './branch.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BranchSchema } from './schemas/branch.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name:'Branch', schema: BranchSchema},
    ])
  ],
  controllers: [BranchController],
  providers: [BranchService]
})
export class BranchModule {}
