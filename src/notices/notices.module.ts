import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { NoticesController } from './notices.controller'
import { NoticesService } from './notices.service'
import { Notice } from './notise.model'

@Module({
  controllers: [NoticesController],
  providers: [NoticesService],
  imports: [SequelizeModule.forFeature([Notice])],
})
export class NoticesModule {}
