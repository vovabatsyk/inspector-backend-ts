import { forwardRef, Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { AuthModule } from 'src/auth/auth.module'
import { RolesModule } from 'src/roles/roles.module'
import { Violation } from 'src/violations/violation.model'
import { ViolationStoryController } from './violation-story.controller'
import { ViolationStory } from './violation-story.model'
import { ViolationStoryService } from './violation-story.service'

@Module({
  controllers: [ViolationStoryController],
  providers: [ViolationStoryService],
  imports: [
    SequelizeModule.forFeature([ViolationStory, Violation]),
    RolesModule,
    forwardRef(() => AuthModule),
  ],
})
export class ViolationStoryModule {}
