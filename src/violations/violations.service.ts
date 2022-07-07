import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { ViolationImagesService } from 'src/violation-images/violation-images.service'
import { CreateViolationDto } from './dto/create-violation-dto'
import { Violation } from './violation.model'

@Injectable()
export class ViolationsService {
  constructor(
    @InjectModel(Violation) private violationRepository: typeof Violation,
    private violationImagesService: ViolationImagesService
  ) {}

  async create(dto: CreateViolationDto) {
    const violation = await this.violationRepository.create(dto)

    if (violation) {
      return violation
    }

    throw new HttpException('Помилка створення порушення', HttpStatus.BAD_REQUEST)
  }

  async getAll() {
    const violations = await this.violationRepository.findAll()
    if (violations) {
      return violations
    }

    throw new HttpException('Помилка загрузки порушеннь', HttpStatus.BAD_REQUEST)
  }

  async getById(id) {
    const violation = await this.violationRepository.findByPk(id)
    if (violation) {
      return violation
    }

    throw new HttpException('Помилка пошуку порушення по id', HttpStatus.NOT_FOUND)
  }

  async getByParams(car_number: string) {
    const violations = await this.violationRepository.findAll({
      where: { car_number },
    })
    console.log(violations)

    if (violations) {
      return violations
    }

    throw new HttpException('Нічого не знайдено', HttpStatus.NOT_FOUND)
  }

  async delete(id) {
    const images = this.violationImagesService.getByValue(id).then((im) => {
      console.log('im', im)
    })
    console.log('images', images)

    const violation = this.violationRepository.destroy({ where: { id } })
    if (violation) {
      return violation
    }

    throw new HttpException('Помилка видалення порушення по id', HttpStatus.BAD_REQUEST)
  }

  // async update(id, dto: CreateViolationDto) {
  //   const violation = await this.violationRepository.update({ ...dto }, { where: { id } })
  //   if (violation) {
  //     return violation
  //   }

  //   throw new HttpException('Помилка оновлення порушення по id', HttpStatus.BAD_REQUEST)
  // }
}
