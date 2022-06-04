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
import { ViolationImages } from 'src/violation-images/violation-images.model'

interface ViolationCreationAttrs {
  violation_number: string
  date: string
  car_mark: string
  car_model: string
  car_number: string
  photos: string
  address: string
  userId: number
}

@Table({ tableName: 'violations' })
export class Violation extends Model<Violation, ViolationCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Ідентифікатор новини' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number

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

  @ApiProperty({ example: 'image.jpg', description: 'Фото порушення' })
  @Column({ type: DataType.STRING, allowNull: false })
  photos: string

  @ApiProperty({ example: '1', description: 'Ідентифікатор користувача' })
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number

  @BelongsTo(() => User)
  author: User

  @HasMany(() => ViolationImages)
  posts: ViolationImages[]
}
