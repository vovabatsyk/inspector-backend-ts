import { ApiProperty } from '@nestjs/swagger'
import { Model, Table, Column, DataType } from 'sequelize-typescript'

interface TokenCreationAttrs {
  value: string
}

@Table({ tableName: 'token', createdAt: false, updatedAt: false })
export class Token extends Model<Token, TokenCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Ідентифікатор токена' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number

  @ApiProperty({ example: 'dscdsvds665dvs6v56sdv46', description: 'Токен' })
  @Column({ type: DataType.STRING(2040), allowNull: true })
  value: string
}
