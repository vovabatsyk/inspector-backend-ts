import { forwardRef, Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { AuthModule } from 'src/auth/auth.module'
import { RolesModule } from 'src/roles/roles.module'
import { Question } from './question.model'
import { QuestionsController } from './questions.controller'
import { QuestionsService } from './questions.service'

@Module({
  controllers: [QuestionsController],
  providers: [QuestionsService],
  imports: [SequelizeModule.forFeature([Question]), RolesModule, forwardRef(() => AuthModule)],
})
export class QuestionsModule {}
