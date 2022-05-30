import { ApiHeader, ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsString, Length } from 'class-validator'

export class CreateUserDto {
  @ApiProperty({ example: 'user@gmail.com', description: 'Електронна скринька' })
  @IsEmail({}, { message: 'Повинен бути email' })
  readonly email: string

  @ApiProperty({ example: 'Володимир Васильович Зенько', description: 'П.І.Б' })
  @IsString({ message: 'Повинен бути string' })
  readonly username: string

  @ApiProperty({ example: 'qwerty1234', description: 'Пароль користувача' })
  @IsString({ message: 'Повинен бути string' })
  @Length(4, 16, { message: 'Не менше 4 і не більше 16 символів' })
  readonly password: string
}
