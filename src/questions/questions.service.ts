import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateQuestionDto } from './dto/create-question.dto'
import { Question } from './question.model'

@Injectable()
export class QuestionsService {
  constructor(@InjectModel(Question) private questionRepository: typeof Question) {}

  async create(dto: CreateQuestionDto) {
    const question = await this.questionRepository.create(dto)

    return question
  }

  async getAll() {
    const questions = await this.questionRepository.findAll()

    return questions
  }

  async getById(id) {
    const question = await this.questionRepository.findByPk(id)
    return question
  }

  async delete(id) {
    const question = this.questionRepository.destroy({ where: { id } })
    return question
  }

  async update(id, dto: CreateQuestionDto) {
    const question = await this.questionRepository.update({ ...dto }, { where: { id } })
    return question
  }
}
