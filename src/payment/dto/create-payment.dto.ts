import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsString } from 'class-validator'

export class CreatePaymentDto {
  @ApiProperty({ example: 'ГУК Львiв/Львівська тг/21081100', description: 'Отримувач коштів' })
  @IsString({ message: 'Повинен бути string' })
  readonly recipient: string

  @ApiProperty({ example: '38008294', description: 'Код отримувача (код за ЄДРПОУ)' })
  readonly code: number

  @ApiProperty({ example: 'Казначейство України (ЕАП)', description: 'Банк отримувача	' })
  @IsString({ message: 'Повинен бути string' })
  readonly bank: string

  @ApiProperty({ example: 'UA638999980314060542000013933', description: 'Номер рахунку' })
  @IsString({ message: 'Повинен бути string' })
  readonly account: string

  @ApiProperty({
    example: 'Обов’язково вказати серію та номер повідомлення або постанови',
    description: 'Призначення платежу',
  })
  @IsString({ message: 'Повинен бути string' })
  readonly purpose: string
}
