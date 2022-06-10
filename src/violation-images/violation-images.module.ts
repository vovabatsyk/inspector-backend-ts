import { forwardRef, Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { AuthModule } from 'src/auth/auth.module'
import { FilesModule } from 'src/files/files.module'
import { Violation } from 'src/violations/violation.model'
import { ViolationImagesController } from './violation-images.controller'
import { ViolationImages } from './violation-images.model'
import { ViolationImagesService } from './violation-images.service'

@Module({
  controllers: [ViolationImagesController],
  providers: [ViolationImagesService],
  imports: [
    SequelizeModule.forFeature([Violation, ViolationImages]),
    FilesModule,
    forwardRef(() => AuthModule),
  ],
})
export class ViolationImagesModule {}
