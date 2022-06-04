import { ApiProperty } from '@nestjs/swagger'

export class AddRoleDto {
  @ApiProperty({ example: 'admin', description: 'Дотати права' })
  readonly value: string

  @ApiProperty({ example: '1', description: 'Шдунтифікатор користувача' })
  readonly userId: number
}
