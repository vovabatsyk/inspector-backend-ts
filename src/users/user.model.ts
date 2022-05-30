import { ApiProperty } from '@nestjs/swagger'
import { Model, Table, Column, DataType, BelongsToMany, HasMany } from 'sequelize-typescript'
import { Post } from 'src/posts/post.model'
import { Role } from 'src/roles/roles.model'
import { UserRoles } from 'src/roles/user-roles.model'

interface UserCreationAttrs {
  email: string
  password: string
  username: string
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Ідентифікатор користувача' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number

  @ApiProperty({ example: 'user@gmail.com', description: 'Електронна скринька' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string

  @ApiProperty({ example: 'qwerty1234', description: 'Пароль користувача' })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string

  @ApiProperty({ example: 'Володимир Васильович Зенько', description: 'П.І.Б' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  username: string

  @ApiProperty({ example: 'false', description: 'Заблокувати користувача' })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: boolean

  @ApiProperty({ example: 'Спам', description: 'Причина блокування користувача' })
  @Column({ type: DataType.STRING, allowNull: true })
  banReason: string

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[]

  @HasMany(() => Post)
  posts: Post[]
}
