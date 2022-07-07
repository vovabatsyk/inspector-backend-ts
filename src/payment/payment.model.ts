import { ApiProperty } from '@nestjs/swagger'
import { Model, Table, Column, DataType } from 'sequelize-typescript'

interface PaymentCreationAttrs {
  recipient: string
  code: number
  bank: string
  account: string
  purpose: string
}

@Table({ tableName: 'payment', createdAt: false, updatedAt: false })
export class Payment extends Model<Payment, PaymentCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Ідентифікатор' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number

  @ApiProperty({ example: 'ГУК Львiв/Львівська тг/21081100', description: 'Отримувач коштів' })
  @Column({ type: DataType.STRING, allowNull: false })
  recipient: string

  @ApiProperty({ example: '38008294', description: 'Код отримувача (код за ЄДРПОУ)' })
  @Column({ type: DataType.INTEGER, allowNull: false })
  code: number

  @ApiProperty({ example: 'Казначейство України (ЕАП)', description: 'Банк отримувача	' })
  @Column({ type: DataType.STRING, allowNull: false })
  bank: string

  @ApiProperty({ example: 'UA638999980314060542000013933', description: 'Номер рахунку' })
  @Column({ type: DataType.STRING, allowNull: false })
  account: string

  @ApiProperty({
    example: 'Обов’язково вказати серію та номер повідомлення або постанови',
    description: 'Призначення платежу',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  purpose: string
}
