import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JWTSession } from 'src/common/decorators';
import { BranchService } from './branch.service';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';

@Controller('branch')
export class BranchController {
  constructor(private readonly branchService: BranchService) {}
  
  @JWTSession()
  @Post()
  create(@Body() createBranchDto: CreateBranchDto) {
    return this.branchService.create(createBranchDto);
  }

  @JWTSession()
  @Get()
  findAll() {
    return this.branchService.findAll();
  }

  @JWTSession()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.branchService.findOne(id);
  }

  @JWTSession()
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBranchDto: UpdateBranchDto) {
    return this.branchService.update(id, updateBranchDto);
  }

}
