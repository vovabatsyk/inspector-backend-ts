import { ApiProperty } from '@nestjs/swagger'

export class TokenDto {
  @ApiProperty({ example: 'еsdcdscsdcsdcdsc34tklm4tkl3кст', description: 'Токен' })
  readonly value: string
}
