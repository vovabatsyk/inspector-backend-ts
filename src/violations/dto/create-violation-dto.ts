import { ApiProperty } from '@nestjs/swagger'

export class CreateViolationDto {
  @ApiProperty({ example: '0001', description: 'Номер постанови' })
  readonly violation_number: string

  @ApiProperty({ example: '0001', description: 'Номер постанови Unip' })
  readonly unip_id: number

  @ApiProperty({ example: '22.04.2022 12:14', description: 'Дата і час порушення' })
  readonly date: string

  @ApiProperty({ example: 'Audi', description: 'Марка авто' })
  readonly car_mark: string

  @ApiProperty({ example: 'А6', description: 'Модель авто' })
  readonly car_model: string

  @ApiProperty({ example: 'BC0001BC', description: 'Номерний знак авто' })
  readonly car_number: string

  @ApiProperty({ example: 'вул. Гавришкевича 6', description: 'Адреса порушення' })
  readonly address: string

  @ApiProperty({ example: '1', description: 'Ідентифікатор користувача' })
  readonly userId: number

  @ApiProperty({ example: '1', description: 'Ідентифікатор фабули' })
  readonly violationStoryId: number
}
