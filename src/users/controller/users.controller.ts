import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger';

@Controller('/users')
@ApiTags('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/getAllUsers')
  @ApiOperation({ summary: 'Obtener todos los usuarios' })
  @ApiResponse({ status: 200, description: 'Lista de usuarios retornada con éxito' })
  getAllUsers() {
    return this.usersService.getUsers();
  }

  @Post('/createUser')
  @ApiOperation({ summary: 'Crea un nuevo usuario' })
  @ApiResponse({ status: 201, description: 'El usuario se creó correctamente' })
  @ApiBody({ type: CreateUserDto })
  createUser(@Body() user: CreateUserDto) {
    return this.usersService.createUser(user);
  }
}
