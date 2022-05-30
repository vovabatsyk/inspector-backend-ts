import { ApiProperty } from '@nestjs/swagger'
import { Model, Table, Column, DataType } from 'sequelize-typescript'

interface QuestionCreationAttrs {
  title: string
  description: string
}

@Table({ tableName: 'questions' })
export class Question extends Model<Question, QuestionCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Ідентифікатор' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number

  @ApiProperty({ example: 'Заголовок 1', description: 'Тема' })
  @Column({ type: DataType.STRING, allowNull: false })
  title: string

  @ApiProperty({ example: 'Текст', description: 'Текст' })
  @Column({ type: DataType.STRING, allowNull: false })
  description: string
}
