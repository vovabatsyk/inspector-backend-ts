import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateViolationAdminDto } from './dto/violation-admin.dto'
import { ViolationAdmin } from './violation-admin.model'

@Injectable()
export class ViolationAdminService {
  constructor(
    @InjectModel(ViolationAdmin) private violationAdminRepository: typeof ViolationAdmin
  ) {}

  async create(dto: CreateViolationAdminDto) {
    const violationAdmin = await this.violationAdminRepository.create(dto)
    return violationAdmin
  }

  async getAll() {
    const violationAdmins = await this.violationAdminRepository.findAll({ include: { all: true } })
    if (violationAdmins) {
      return violationAdmins
    }

    throw new HttpException('Помилка загрузки статей', HttpStatus.BAD_REQUEST)
  }

  async getById(id) {
    const violationAdmin = await this.violationAdminRepository.findByPk(id, {
      include: { all: true },
    })
    if (violationAdmin) {
      return violationAdmin
    }
    throw new HttpException('Статтю не знайдено', HttpStatus.NOT_FOUND)
  }

  async delete(id) {
    const violationAdmin = await this.violationAdminRepository.destroy({ where: { id } })
    if (violationAdmin) {
      return violationAdmin
    }

    throw new HttpException('Помилка видалення статті по id', HttpStatus.BAD_REQUEST)
  }

  async update(id, dto: CreateViolationAdminDto) {
    const violationAdmin = await this.violationAdminRepository.update({ ...dto }, { where: { id } })
    if (violationAdmin) {
      return violationAdmin
    }

    throw new HttpException('Помилка оновлення статті по id', HttpStatus.BAD_REQUEST)
  }
}
