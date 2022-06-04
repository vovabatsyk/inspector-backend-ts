import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { ViolationImages } from './violation-images.model'

@Injectable()
export class ViolationImagesService {
  constructor(
    @InjectModel(ViolationImages) private violationImagesRepository: typeof ViolationImages
  ) {}

  async getAll() {
    const violationImages = await this.violationImagesRepository.findAll()
    if (violationImages) {
      return violationImages
    }

    throw new HttpException('Зображення порушення не знайдені', HttpStatus.NOT_FOUND)
  }

  async getByValue(violationId: string) {
    const violationImages = await this.violationImagesRepository.findAll({ where: { violationId } })
    if (violationImages) {
      return violationImages
    }

    throw new HttpException(
      'Зображення порушення за таким параметром  не знайдені',
      HttpStatus.NOT_FOUND
    )
  }
}
