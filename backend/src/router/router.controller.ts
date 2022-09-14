import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RouterService } from './router.service';
import { CreateRouterDto } from './dto/create-router.dto';
import { UpdateRouterDto } from './dto/update-router.dto';
import { JWTSession } from 'src/common/decorators';

@Controller('router')
export class RouterController {
  constructor(private readonly routerService: RouterService) {}

  @JWTSession()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.routerService.findOne(id);
  }

  @JWTSession()
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRouterDto: UpdateRouterDto) {
    return this.routerService.update(id, updateRouterDto);
  }
}
