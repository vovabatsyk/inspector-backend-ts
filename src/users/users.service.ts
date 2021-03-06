import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { RolesService } from 'src/roles/roles.service'
import { AddRoleDto } from './dto/add-role.dto'
import { BanUserDto } from './dto/ban-user.dto'
import { CreateUserDto } from './dto/create-user-dto'
import { User } from './user.model'

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private roleService: RolesService
  ) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto)
    const role = await this.roleService.getRoleByValue('admin')
    await user.$set('roles', [role.id])
    user.roles = [role]
    return user
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll({ include: { all: true } })
    if (users) {
      return users
    }

    throw new HttpException('Помилка загрузки користувачів', HttpStatus.BAD_REQUEST)
  }

  async getUserByEmail(email: string) {
    const user = await this.userRepository.findOne({ where: { email }, include: { all: true } })
    return user
  }

  async getById(id) {
    const user = await this.userRepository.findByPk(id, { include: { all: true } })
    if (user) {
      return user
    }
    throw new HttpException('Користувача не знайдено', HttpStatus.NOT_FOUND)
  }

  async addRole(dto: AddRoleDto) {
    const user = await this.userRepository.findByPk(dto.userId)
    const role = await this.roleService.getRoleByValue(dto.value)
    if (role && user) {
      await user.$add('role', role.id)
      return dto
    }
    throw new HttpException('Користувач або тип не знайдено', HttpStatus.NOT_FOUND)
  }

  async ban(dto: BanUserDto) {
    const user = await this.userRepository.findByPk(dto.userId)
    if (!user) {
      throw new HttpException('Користувача не знайдено', HttpStatus.NOT_FOUND)
    }
    user.banned = true
    user.banReason = dto.banReason
    await user.save()
    return user
  }

  async delete(id) {
    const user = await this.userRepository.destroy({ where: { id } })
    if (user) {
      return user
    }

    throw new HttpException('Помилка видалення користувача по id', HttpStatus.BAD_REQUEST)
  }

  async update(id, dto: CreateUserDto) {
    const user = await this.userRepository.update({ ...dto }, { where: { id } })
    if (user) {
      return user
    }

    throw new HttpException('Помилка оновлення користувача по id', HttpStatus.BAD_REQUEST)
  }
}
