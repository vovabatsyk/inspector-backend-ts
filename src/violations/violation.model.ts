import { ApiProperty } from '@nestjs/swagger'
import {
  Model,
  Table,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
  HasMany,
} from 'sequelize-typescript'
import { User } from 'src/users/user.model'
import { ViolationAdmin } from 'src/violation-admin/violation-admin.model'
import { ViolationImages } from 'src/violation-images/violation-images.model'
import { ViolationStory } from 'src/violation-story/violation-story.model'

interface ViolationCreationAttrs {
  violation_number: string
  date: string
  car_mark: string
  car_model: string
  car_number: string
  address: string
  userId: number
  violationStoryId: number
  unip_id: number
}

@Table({ tableName: 'violations' })
export class Violation extends Model<Violation, ViolationCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Ідентифікатор постанови' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number

  @ApiProperty({ example: '0001', description: 'Ідентифікатор постанови Unip ' })
  @Column({ type: DataType.INTEGER, allowNull: true })
  unip_id: string

  @ApiProperty({ example: '0001', description: 'Номер постанови' })
  @Column({ type: DataType.STRING, allowNull: false })
  violation_number: string

  @ApiProperty({ example: '22.04.2022 12:14', description: 'Дата і час порушення' })
  @Column({ type: DataType.STRING, allowNull: false })
  date: string

  @ApiProperty({ example: 'Audi', description: 'Марка авто' })
  @Column({ type: DataType.STRING, allowNull: false })
  car_mark: string

  @ApiProperty({ example: 'А6', description: 'Модель авто' })
  @Column({ type: DataType.STRING, allowNull: false })
  car_model: string

  @ApiProperty({ example: 'BC0001BC', description: 'Номерний знак авто' })
  @Column({ type: DataType.STRING, allowNull: false })
  car_number: string

  @ApiProperty({ example: 'вул. Гавришкевича 6', description: 'Адреса порушення' })
  @Column({ type: DataType.STRING, allowNull: false })
  address: string

  @ApiProperty({ example: '1', description: 'Ідентифікатор користувача' })
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number

  @BelongsTo(() => User)
  author: User

  @ApiProperty({ example: '1', description: 'Ідентифікатор статті' })
  @ForeignKey(() => ViolationAdmin)
  @Column({ type: DataType.INTEGER })
  violationAdminId: number

  @BelongsTo(() => ViolationAdmin)
  violationAdmin: ViolationAdmin

  @HasMany(() => ViolationImages)
  posts: ViolationImages[]

  @ApiProperty({ example: '1', description: 'Ідентифікатор фабули' })
  @ForeignKey(() => ViolationStory)
  @Column({ type: DataType.INTEGER })
  violationStoryId: number

  @BelongsTo(() => ViolationStory)
  story: ViolationStory
}
