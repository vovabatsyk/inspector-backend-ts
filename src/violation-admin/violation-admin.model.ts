import { ApiProperty } from '@nestjs/swagger'
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript'
import { Violation } from 'src/violations/violation.model'

interface ViolationAdminCreationAttrs {
  name: string
  min: number
  multy: number
}

@Table({ tableName: 'violation-admin', createdAt: false, updatedAt: false })
export class ViolationAdmin extends Model<ViolationAdmin, ViolationAdminCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Ідентифікатор статті порушення' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number

  @ApiProperty({ example: 'Назва', description: 'ч. 1 ст. 122' })
  @Column({ type: DataType.STRING, allowNull: false })
  readonly name: string

  @ApiProperty({ example: '17', description: 'Мінімум доходів громадян' })
  @Column({ type: DataType.STRING, allowNull: false })
  readonly min: number

  @ApiProperty({ example: '17', description: 'Штраф (мінімум доходів громадян(' })
  @Column({ type: DataType.STRING, allowNull: false })
  readonly multy: number

  @ApiProperty({ example: 'true', description: 'Чинна стаття?' })
  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  status: boolean

  @HasMany(() => Violation)
  violations: Violation[]
}
