import { ApiProperty } from '@nestjs/swagger'
import { Model, Table, Column, DataType } from 'sequelize-typescript'

interface NoticeCreationAttrs {
  title: string
  content: string
  userId: number
  image: string
}

@Table({ tableName: 'notices', createdAt: false, updatedAt: false })
export class Notice extends Model<Notice, NoticeCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Ідентифікатор новини' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number

  @ApiProperty({ example: 'Заголовок 1', description: 'Тема новини' })
  @Column({ type: DataType.STRING, allowNull: true })
  title: string

  @ApiProperty({ example: 'Текст', description: 'Текст' })
  @Column({ type: DataType.STRING(1200), allowNull: false })
  description: string
}
