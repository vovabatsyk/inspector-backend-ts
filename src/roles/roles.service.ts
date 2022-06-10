import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateRoleDto } from './dto/create-role-dto'
import { Role } from './roles.model'

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private roleRepository: typeof Role) {}

  async getAllRoles() {
    const roles = await this.roleRepository.findAll()
    if (roles) {
      return roles
    }

    throw new HttpException('Помилка загрузки ролей', HttpStatus.BAD_REQUEST)
  }

  async createRole(dto: CreateRoleDto) {
    const role = await this.roleRepository.create(dto)
    if (role) {
      return role
    }

    throw new HttpException('Помилка створення ролі', HttpStatus.BAD_REQUEST)
  }

  async getRoleByValue(value: string) {
    const role = await this.roleRepository.findOne({ where: { value } })

    if (role) {
      return role
    }

    throw new HttpException('Помилка загрузки ролі по назві', HttpStatus.NOT_FOUND)
  }
}
