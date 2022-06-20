import { forwardRef, Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { AuthModule } from 'src/auth/auth.module'
import { RolesModule } from 'src/roles/roles.module'
import { Violation } from 'src/violations/violation.model'
import { ViolationAdminController } from './violation-admin.controller'
import { ViolationAdmin } from './violation-admin.model'
import { ViolationAdminService } from './violation-admin.service'

@Module({
  controllers: [ViolationAdminController],
  providers: [ViolationAdminService],
  imports: [
    SequelizeModule.forFeature([ViolationAdmin, Violation]),
    RolesModule,
    forwardRef(() => AuthModule),
  ],
})
export class ViolationAdminModule {}
