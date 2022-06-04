import { forwardRef, Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { AuthModule } from 'src/auth/auth.module'
import { RolesModule } from 'src/roles/roles.module'
import { PaymentController } from './payment.controller'
import { Payment } from './payment.model'
import { PaymentService } from './payment.service'

@Module({
  controllers: [PaymentController],
  providers: [PaymentService],
  imports: [SequelizeModule.forFeature([Payment]), RolesModule, forwardRef(() => AuthModule)],
})
export class PaymentModule {}
