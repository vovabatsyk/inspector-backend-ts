import { ApiProperty } from '@nestjs/swagger'

export class CreateViolationImagesDto {
  @ApiProperty({ example: 'image.jpeg', description: 'Назва зображення' })
  readonly image: string

  @ApiProperty({ example: '1', description: 'Ідентифікатор порушення' })
  readonly violationId: number
}
