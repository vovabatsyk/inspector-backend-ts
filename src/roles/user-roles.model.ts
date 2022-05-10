import { ApiProperty } from '@nestjs/swagger'
import { Model, Table, Column, DataType, ForeignKey, CreatedAt } from 'sequelize-typescript'
import { User } from 'src/users/user.model'
import { Role } from './roles.model'

@Table({ tableName: 'user_roles', createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles> {
  @ApiProperty({ example: '1', description: 'Ідентифікатор' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number

  @ForeignKey(() => Role)
  @ApiProperty({ example: '1', description: 'Ідентифікатор типу користувача' })
  @Column({ type: DataType.INTEGER })
  idRoles: Number

  @ForeignKey(() => User)
  @ApiProperty({ example: '1', description: 'Ідентифікатор користувача' })
  @Column({ type: DataType.INTEGER })
  idUser: number
}
