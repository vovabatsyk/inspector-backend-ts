import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class CreateQuestionDto {
  @ApiProperty({ example: 'Запитання!', description: 'Запитання' })
  @IsString({ message: 'Повинен бути string' })
  readonly title: string

  @ApiProperty({ example: 'Відповідь', description: 'Відповідь' })
  @IsString({ message: 'Повинен бути string' })
  readonly description: string
}
