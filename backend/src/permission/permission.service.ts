import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { IPermisssion } from './interface/permission.schema';

@Injectable()
export class PermissionService {
  constructor(@InjectModel('Permission') private permissionModel: Model<IPermisssion>){}

  async create(createPermissionDto: CreatePermissionDto, code:string) {
    const permission = new this.permissionModel({ ...createPermissionDto, branch:code });
    await permission.save();
    return 'Se ha creado el permiso.';
  }

  findAll() {
    return `This action returns all permission`;
  }

  findOne(id: number) {
    return `This action returns a #${id} permission`;
  }

  update(id: number, updatePermissionDto: UpdatePermissionDto) {
    return `This action updates a #${id} permission`;
  }

  remove(id: number) {
    return `This action removes a #${id} permission`;
  }
}
