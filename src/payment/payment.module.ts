import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { PaymentController } from './payment.controller'
import { Payment } from './payment.model'
import { PaymentService } from './payment.service'

@Module({
  controllers: [PaymentController],
  providers: [PaymentService],
  imports: [SequelizeModule.forFeature([Payment])],
})
export class PaymentModule {}
