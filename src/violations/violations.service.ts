import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateViolationDto } from './dto/create-violation-dto'
import { Violation } from './violation.model'

@Injectable()
export class ViolationsService {
  constructor(@InjectModel(Violation) private violationRepository: typeof Violation) {}

  async create(dto: CreateViolationDto) {
    const violation = await this.violationRepository.create(dto)
    return violation
  }

  async getAll() {
    const violations = await this.violationRepository.findAll()
    return violations
  }

  async getById(id) {
    const violation = await this.violationRepository.findByPk(id)
    return violation
  }

  async getByParams(car_number: string) {
    const violations = await this.violationRepository.findAll({
      where: { car_number },
    })

    if (violations.length) {
      return violations
    }

    throw new HttpException('Нічого не знайдено', HttpStatus.NOT_FOUND)
  }

  async delete(id) {
    const violation = this.violationRepository.destroy({ where: { id } })
    return violation
  }

  async update(id, dto: CreateViolationDto) {
    const violation = await this.violationRepository.update({ ...dto }, { where: { id } })
    return violation
  }
}
