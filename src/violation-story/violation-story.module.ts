import { forwardRef, Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { AuthModule } from 'src/auth/auth.module'
import { RolesModule } from 'src/roles/roles.module'
import { ViolationStoryController } from './violation-story.controller'
import { ViolationStory } from './violation-story.model'
import { ViolationStoryService } from './violation-story.service'

@Module({
  controllers: [ViolationStoryController],
  providers: [ViolationStoryService],
  imports: [
    SequelizeModule.forFeature([ViolationStory]),
    RolesModule,
    forwardRef(() => AuthModule),
  ],
})
export class ViolationStoryModule {}
