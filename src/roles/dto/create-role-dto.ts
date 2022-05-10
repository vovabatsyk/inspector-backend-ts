import { ApiProperty } from '@nestjs/swagger'

export class CreateRoleDto {
  @ApiProperty({ example: 'admin', description: 'Тип користувача' })
  readonly value: string

  @ApiProperty({ example: 'Адміністратор', description: 'Опис типу користувача' })
  readonly description: string
}
