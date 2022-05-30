import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreatePaymentDto } from './dto/create-payment.dto'
import { Payment } from './payment.model'

@Injectable()
export class PaymentService {
  constructor(@InjectModel(Payment) private paymentRepository: typeof Payment) {}

  async create(dto: CreatePaymentDto) {
    const payment = await this.paymentRepository.create(dto)

    return payment
  }

  async getAll() {
    const payments = await this.paymentRepository.findAll()

    return payments
  }

  async getById(id) {
    const payment = await this.paymentRepository.findByPk(id)
    return payment
  }

  async delete(id) {
    const payment = this.paymentRepository.destroy({ where: { id } })
    return payment
  }

  async update(id, dto: CreatePaymentDto) {
    const payment = await this.paymentRepository.update({ ...dto }, { where: { id } })
    return payment
  }
}
