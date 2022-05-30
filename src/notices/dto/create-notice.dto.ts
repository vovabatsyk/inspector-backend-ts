import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class CreateNoticeDto {
  @ApiProperty({ example: 'Оплата!', description: 'Тема' })
  @IsString({ message: 'Повинен бути string' })
  readonly title: string

  @ApiProperty({ example: 'Текст', description: 'Текст' })
  @IsString({ message: 'Повинен бути string' })
  readonly description: string
}
