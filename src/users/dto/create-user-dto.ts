import { ApiHeader, ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
  @ApiProperty({ example: 'user@gmail.com', description: 'Електронна скринька' })
  readonly email: string

  @ApiProperty({ example: 'Володимир Васильович Зенько', description: 'П.І.Б' })
  readonly username: string

  @ApiProperty({ example: 'qwerty1234', description: 'Пароль користувача' })
  readonly password: string
}
