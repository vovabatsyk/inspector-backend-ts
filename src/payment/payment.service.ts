import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreatePaymentDto } from './dto/create-payment.dto'
import { Payment } from './payment.model'

@Injectable()
export class PaymentService {
  constructor(@InjectModel(Payment) private paymentRepository: typeof Payment) {}

  async create(dto: CreatePaymentDto) {
    const payment = await this.paymentRepository.create(dto)
    if (payment) {
      return payment
    }
    throw new HttpException('Помилка створення платіжки', HttpStatus.BAD_REQUEST)
  }

  async getAll() {
    const payments = await this.paymentRepository.findAll()
    if (payments) {
      return payments
    }

    throw new HttpException('Помилка загрузки платіжок', HttpStatus.BAD_REQUEST)
  }

  async getById(id) {
    const payment = await this.paymentRepository.findByPk(id)
    if (payment) {
      return payment
    }
    throw new HttpException('Помилка пошуку платіжки по id', HttpStatus.NOT_FOUND)
  }

  async delete(id) {
    const payment = this.paymentRepository.destroy({ where: { id } })
    if (payment) {
      return payment
    }

    throw new HttpException('Помилка видалення платіжки по id', HttpStatus.NOT_FOUND)
  }

  async update(id, dto: CreatePaymentDto) {
    const payment = await this.paymentRepository.update({ ...dto }, { where: { id } })
    if (payment) {
      return payment
    }

    throw new HttpException('Помилка оновлення платіжки по id', HttpStatus.BAD_REQUEST)
  }
}
