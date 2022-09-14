import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HashHelper } from 'src/common/helper';
import { RouterService } from 'src/router/router.service';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';
import { IBranch } from './interface/branch.interface';

@Injectable()
export class BranchService {
  constructor(
    @InjectModel('Branch') private branchModel: Model<IBranch>,
    private readonly routerService:RouterService){}

  async create(createBranchDto: CreateBranchDto) {
    const branch = new this.branchModel({...createBranchDto});
    const token = await HashHelper.tokenGenerator(branch._id.toString());
    branch.token = token;

    await this.routerService.create(branch._id);
    branch.save();
    return branch;
  }

  async findAll() {
    const branches = await this.branchModel.find();
    return branches;
  }

  async findOne(id: string) {
    const branch = await this.branchModel.findById(id);
    return branch;
  }

  async update(id: string, updateBranchDto: UpdateBranchDto) {
    const branch = await this.branchModel.findOneAndUpdate({_id:id},{updateBranchDto},{new:true});
    return branch;
  }

}
