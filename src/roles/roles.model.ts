import { ApiProperty } from '@nestjs/swagger'
import { Model, Table, Column, DataType, BelongsToMany } from 'sequelize-typescript'
import { User } from 'src/users/user.model'
import { UserRoles } from './user-roles.model'

interface RoleCreationAttrs {
  value: string
  description: string
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Ідентифікатор користувача' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number

  @ApiProperty({ example: 'admin', description: 'Тип користувача' })
  @Column({ type: DataType.STRING, allowNull: false })
  value: string

  @ApiProperty({ example: 'Адміністратор', description: 'Опис типу користувача' })
  @Column({ type: DataType.STRING, allowNull: false })
  description: string

  @BelongsToMany(() => User, () => UserRoles)
  users: User[]
}
