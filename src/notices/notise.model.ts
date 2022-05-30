import { ApiProperty } from '@nestjs/swagger'
import { Model, Table, Column, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript'
import { User } from 'src/users/user.model'

interface NoticeCreationAttrs {
  title: string
  content: string
  userId: number
  image: string
}

@Table({ tableName: 'notices' })
export class Notice extends Model<Notice, NoticeCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Ідентифікатор новини' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number

  @ApiProperty({ example: 'Заголовок 1', description: 'Тема новини' })
  @Column({ type: DataType.STRING, allowNull: true })
  title: string

  @ApiProperty({ example: 'Текст', description: 'Текст' })
  @Column({ type: DataType.STRING, allowNull: false })
  description: string
}