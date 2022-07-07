import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { ViolationPaymentsController } from './violation-payments.controller'
import { ViolationPayment } from './violation-payments.model'
import { ViolationPaymentsService } from './violation-payments.service'

@Module({
  controllers: [ViolationPaymentsController],
  providers: [ViolationPaymentsService],
  imports: [SequelizeModule.forFeature([ViolationPayment])],
})
export class ViolationPaymentsModule {}
