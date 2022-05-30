import { ApiProperty } from '@nestjs/swagger'

export class CreatePostDto {
  @ApiProperty({ example: 'Заголовок 1', description: 'Тема новини' })
  readonly title: string

  @ApiProperty({ example: 'Текст', description: 'Текст' })
  readonly content: string

  @ApiProperty({ example: '1', description: 'Ідентифікатор користувача' })
  readonly idUser: number
}
