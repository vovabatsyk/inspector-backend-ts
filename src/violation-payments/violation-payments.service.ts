import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { ViolationPaymentDto } from './dto/violation-payment.dto'
import { ViolationPayment } from './violation-payments.model'

@Injectable()
export class ViolationPaymentsService {
  constructor(
    @InjectModel(ViolationPayment) private violationPaymentRepository: typeof ViolationPayment
  ) {}

  async create(dto: ViolationPaymentDto) {
    const payment = await this.violationPaymentRepository.create(dto)

    if (payment) {
      return payment
    }

    throw new HttpException('Помилка створення оплати', HttpStatus.BAD_REQUEST)
  }

  async getById(id) {
    const payment = await this.violationPaymentRepository.findOne({ where: { ViolationId: id } })
    if (payment) {
      return payment
    }

    throw new HttpException('Помилка пошуку порушення по id', HttpStatus.NOT_FOUND)
  }
}
