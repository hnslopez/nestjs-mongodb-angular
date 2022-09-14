import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { IRoles } from './interface/roles.interface';

@Injectable()
export class RolesService {
  constructor(
    @InjectModel('Roles') private roleModel: Model<IRoles>
  ) { }

  async create(createRoleDto: CreateRoleDto,branch:string) {
    const roles = new this.roleModel({...createRoleDto,branch});
    await roles.save();
    return 'Se ha creado un rol con exito';
  }

  async findAll(id:string){
    const roles = await this.roleModel.find({branch:id}).populate('permission');
    return roles;
  }

  async findOne(id: string, branch:string) {
    const rol = await this.roleModel.findOne({id,branch});
    return rol;
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
