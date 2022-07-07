import { ApiProperty } from '@nestjs/swagger'
import { Model, Table, Column, DataType } from 'sequelize-typescript'

interface ViolationPaymentCreationAttrs {
  ViolationId: number
  FineAmount: number
  PaymentState: string
  PayedAmount: null | number
}

@Table({ tableName: 'violation-payments', createdAt: false, updatedAt: false })
export class ViolationPayment extends Model<ViolationPayment, ViolationPaymentCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Ідентифікатор оплати' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number

  @ApiProperty({ example: '2321', description: 'Ідентифікатор порушення' })
  @Column({ type: DataType.INTEGER, allowNull: false })
  ViolationId: number

  @ApiProperty({ example: '255', description: 'Сума до оплати' })
  @Column({ type: DataType.INTEGER, allowNull: true })
  FineAmount: number

  @ApiProperty({ example: 'Не сплачено', description: 'Статус оплати' })
  @Column({ type: DataType.STRING, allowNull: true })
  PaymentState: string

  @ApiProperty({ example: '0', description: 'Сума до оплати' })
  @Column({ type: DataType.INTEGER, allowNull: true })
  PayedAmount: number
}
