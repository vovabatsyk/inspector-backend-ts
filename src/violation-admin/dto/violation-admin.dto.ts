import { ApiHeader, ApiProperty } from '@nestjs/swagger'
import { isBoolean, IsEmail, IsNumber, IsString, Length } from 'class-validator'

export class CreateViolationAdminDto {
  @ApiProperty({ example: 'Назва', description: 'ч. 1 ст. 122' })
  @IsString({ message: 'Повинен бути string' })
  readonly name: string

  @ApiProperty({ example: '17', description: 'Мінімум доходів громадян' })
  @IsNumber()
  readonly min: number

  @ApiProperty({ example: '17', description: 'Штраф (мінімум доходів громадян(' })
  @IsNumber()
  readonly multy: number
}
