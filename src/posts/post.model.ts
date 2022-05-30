import { ApiProperty } from '@nestjs/swagger'
import { Model, Table, Column, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript'
import { User } from 'src/users/user.model'

interface PostCreationAttrs {
  title: string
  content: string
  userId: number
  image: string
}

@Table({ tableName: 'posts' })
export class Post extends Model<Post, PostCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Ідентифікатор новини' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number

  @ApiProperty({ example: 'Заголовок 1', description: 'Тема новини' })
  @Column({ type: DataType.STRING, allowNull: false })
  title: string

  @ApiProperty({ example: 'Текст', description: 'Текст' })
  @Column({ type: DataType.STRING, allowNull: false })
  content: string

  @ApiProperty({ example: 'image.jpg', description: 'Картинка' })
  @Column({ type: DataType.STRING, allowNull: false })
  image: string

  @ApiProperty({ example: '1', description: 'Ідентифікатор користувача' })
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number

  @BelongsTo(() => User)
  author: User
}
