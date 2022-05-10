import { Body, Controller, Get, Post } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreateUserDto } from './dto/create-user-dto'
import { User } from './user.model'
import { UsersService } from './users.service'

@ApiTags('Користувачі')
@Controller('api/users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiOperation({ summary: 'Створити користувача' })
  @ApiResponse({ status: 200, type: User })
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto)
  }

  @ApiOperation({ summary: 'Всі користувачі' })
  @ApiResponse({ status: 200, type: [User] })
  @Get()
  getAll() {
    return this.userService.getAllUsers()
  }
}
