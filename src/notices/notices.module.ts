import { forwardRef, Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { AuthModule } from 'src/auth/auth.module'
import { RolesModule } from 'src/roles/roles.module'
import { NoticesController } from './notices.controller'
import { NoticesService } from './notices.service'
import { Notice } from './notise.model'

@Module({
  controllers: [NoticesController],
  providers: [NoticesService],
  imports: [SequelizeModule.forFeature([Notice]), RolesModule, forwardRef(() => AuthModule)],
})
export class NoticesModule {}
