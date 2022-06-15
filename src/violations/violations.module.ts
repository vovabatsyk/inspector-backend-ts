import { forwardRef, Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { AuthModule } from 'src/auth/auth.module'
import { User } from 'src/users/user.model'
import { ViolationImagesModule } from 'src/violation-images/violation-images.module'
import { ViolationStory } from 'src/violation-story/violation-story.model'
import { Violation } from './violation.model'
import { ViolationsController } from './violations.controller'
import { ViolationsService } from './violations.service'

@Module({
  controllers: [ViolationsController],
  providers: [ViolationsService],
  imports: [
    SequelizeModule.forFeature([User, Violation, ViolationStory]),
    ViolationImagesModule,
    forwardRef(() => AuthModule),
  ],
})
export class ViolationsModule {}
