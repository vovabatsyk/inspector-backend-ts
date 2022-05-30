import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { User } from 'src/users/user.model'
import { Violation } from './violation.model'
import { ViolationsController } from './violations.controller'
import { ViolationsService } from './violations.service'

@Module({
  controllers: [ViolationsController],
  providers: [ViolationsService],
  imports: [SequelizeModule.forFeature([User, Violation])],
})
export class ViolationsModule {}
