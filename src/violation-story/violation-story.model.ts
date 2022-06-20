import { ApiProperty } from '@nestjs/swagger'
import { Model, Table, Column, DataType, HasMany } from 'sequelize-typescript'
import { Violation } from 'src/violations/violation.model'

interface ViolationStoryCreationAttrs {
  title: string
  description: string
}

@Table({ tableName: 'violation-story' })
export class ViolationStory extends Model<ViolationStory, ViolationStoryCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Ідентифікатор фабули' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number

  @ApiProperty({ example: 'Пішохідний перехід (зупинка)!', description: 'Назва фабули' })
  @Column({ type: DataType.STRING, allowNull: true })
  title: string

  @ApiProperty({
    example:
      'водій даного т/з здійснив зупинку на пішохідному переході, що створює перешкоду руху пішоходам, чим порушив п.15.9 "г" ПДР України.',
    description: 'Опис фабули фабули',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  description: string

  @HasMany(() => Violation)
  violations: Violation[]
}
