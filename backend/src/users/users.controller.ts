import { Controller, Get, Post, Body, Patch, Param, Delete, Res, BadRequestException, HttpStatus, UseGuards, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JWTSession, User } from 'src/common/decorators';
import { IUser } from './interface/user.interface';
import { JwtNoAuthGuard } from 'src/auth/guards/jwt-no-auth.guard';
import { FilterUserDto } from './dto/filter-user.dto';
import { RouterGuard } from 'src/auth/guards/router.guard';
import { Branch } from 'src/common/decorators/branch.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @UseGuards(JwtNoAuthGuard, RouterGuard)
  @Post('create')
  async create(@Res() res, @Body() createUserDto: CreateUserDto, @Branch() id: string) {
    const mail = await this.usersService.getUserByEmail(createUserDto.email);
    if (mail) throw new BadRequestException('Correo no disponible')

    const username = await this.usersService.getUserByEmail(createUserDto.username);
    if (username) throw new BadRequestException('Nombre de usuario no disponible')

    await this.usersService.create(createUserDto, id);

    return res.status(HttpStatus.OK).json({
      message: 'Usuario Creado, se enviara un correo cuando se habilite su cuenta'
    })
  }

  @JWTSession()
  @Get()
  async findAll(@Res() res, @Branch() branch: string) {
    const users = await this.usersService.findAll(branch);
    return res.status(HttpStatus.OK).json(users);
  }

  @JWTSession()
  @Get('profile')
  async profile(@Res() res, @User() user: IUser) {
    return res.status(HttpStatus.OK).json(user.profile)
  }

  @Post('filter/user')
  async filterUser(@Res() res, @Body() filterUserDto: FilterUserDto) {
    const available = await this.usersService.getUserbyUsernameFilter(filterUserDto.filter);
    return res.status(HttpStatus.OK).json(available);
  }

}
