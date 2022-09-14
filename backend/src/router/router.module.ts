import { Global, Module } from '@nestjs/common';
import { RouterService } from './router.service';
import { RouterController } from './router.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RouterSchema } from './schemas/router.schema';
import { BranchSchema } from 'src/branch/schemas/branch.schema';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([
      {name:'Router', schema:RouterSchema},
      {name:'Branch', schema: BranchSchema}

    ])
  ],
  controllers: [RouterController],
  providers: [RouterService],
  exports:[RouterService]


})
export class RouterModule {}
