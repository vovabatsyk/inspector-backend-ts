import { Body, Controller, Post } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { CreateUserDto } from 'src/users/dto/create-user-dto'
import { AuthService } from './auth.service'

@ApiTags('Авторизація')
@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'Авторизуватися' })
  @Post('/login')
  login(@Body() userDto: CreateUserDto) {
    return this.authService.login(userDto)
  }

  @ApiOperation({ summary: 'Реєстрація користувача' })
  @Post('/registration')
  registration(@Body() userDto: CreateUserDto) {
    return this.authService.registration(userDto)
  }
}
