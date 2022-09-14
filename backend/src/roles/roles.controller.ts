import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Branch } from 'src/common/decorators/branch.decorator';
import { JWTSession } from 'src/common/decorators';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  create(@Body() createRoleDto: CreateRoleDto, @Branch() id:string) {
    return this.rolesService.create(createRoleDto,id);
  }
  
  @JWTSession()
  @Get()
  findAll(@Branch() id:string) {
    return this.rolesService.findAll(id);
  }  

  @JWTSession()
  @Get(':id')
  findOne(@Param('id') id: string, @Branch() branch:string) {
    return this.rolesService.findOne(id, branch);
  }

  @JWTSession()
  @Patch(':id') 
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.rolesService.update(+id, updateRoleDto);
  }

  @JWTSession()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesService.remove(+id);
  }
}
