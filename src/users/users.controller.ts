import { Body, Controller, Delete, Get, Param, Post, UseGuards, UsePipes } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'
import { Roles } from 'src/auth/roles-auth.decorator'
import { RolesGuard } from 'src/auth/roles.guard'
import { ValidationPipe } from 'src/pipes/validation.pipe'
import { AddRoleDto } from './dto/add-role.dto'
import { BanUserDto } from './dto/ban-user.dto'
import { CreateUserDto } from './dto/create-user-dto'
import { User } from './user.model'
import { UsersService } from './users.service'

@ApiTags('Користувачі')
@Controller('api/users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiOperation({ summary: 'Створити користувача' })
  @ApiResponse({ status: 200, type: User })
  // @UsePipes(ValidationPipe)
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto)
  }

  @ApiOperation({ summary: 'Всі користувачі' })
  @ApiResponse({ status: 200, type: [User] })
  @UseGuards(JwtAuthGuard)
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.userService.getAllUsers()
  }

  @ApiOperation({ summary: 'Змінити тип користувача' })
  @ApiResponse({ status: 200 })
  @UseGuards(JwtAuthGuard)
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Post('/role')
  addRole(@Body() dto: AddRoleDto) {
    return this.userService.addRole(dto)
  }

  @ApiOperation({ summary: 'Заблокувати користувача' })
  @ApiResponse({ status: 200 })
  @UseGuards(JwtAuthGuard)
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Post('/ban')
  ban(@Body() dto: BanUserDto) {
    return this.userService.ban(dto)
  }

  @ApiOperation({ summary: 'Видалити користувача' })
  @ApiResponse({ status: 200, type: [User] })
  @Delete(':id')
  deletePost(@Param('id') id: string) {
    return this.userService.delete(id)
  }
}
