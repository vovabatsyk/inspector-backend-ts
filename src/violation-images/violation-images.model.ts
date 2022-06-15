import { ApiProperty } from '@nestjs/swagger'
import { Model, Table, Column, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript'
import { User } from 'src/users/user.model'
import { Violation } from 'src/violations/violation.model'

interface ViolationImagesCreationAttrs {
  violationId: number
  image: string
}

@Table({ tableName: 'violation-images', createdAt: false, updatedAt: false })
export class ViolationImages extends Model<ViolationImages, ViolationImagesCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Ідентифікатор зображення' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number

  @ApiProperty({ example: 'image.jpg', description: 'Картинка' })
  @Column({ type: DataType.STRING, allowNull: false })
  image: string

  @ApiProperty({ example: '1', description: 'Ідентифікатор порушення' })
  @ForeignKey(() => Violation)
  @Column({ type: DataType.INTEGER })
  violationId: number

  @BelongsTo(() => Violation)
  author: Violation
}
