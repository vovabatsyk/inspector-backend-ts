import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateQuestionDto } from './dto/create-question.dto'
import { Question } from './question.model'

@Injectable()
export class QuestionsService {
  constructor(@InjectModel(Question) private questionRepository: typeof Question) {}

  async create(dto: CreateQuestionDto) {
    const question = await this.questionRepository.create(dto)

    if (question) {
      return question
    }

    throw new HttpException('Помилка створення запитань', HttpStatus.BAD_REQUEST)
  }

  async getAll() {
    const questions = await this.questionRepository.findAll()

    if (questions) {
      return questions
    }

    throw new HttpException('Помилка загрузки запитань', HttpStatus.BAD_REQUEST)
  }

  async getById(id) {
    const question = await this.questionRepository.findByPk(id)

    if (question) {
      return question
    }

    throw new HttpException('Помилка пошуку запитання по id', HttpStatus.NOT_FOUND)
  }

  async delete(id) {
    const question = this.questionRepository.destroy({ where: { id } })
    if (question) {
      return question
    }

    throw new HttpException('Помилка видалення запитання по id', HttpStatus.NOT_FOUND)
  }

  async update(id, dto: CreateQuestionDto) {
    const question = await this.questionRepository.update({ ...dto }, { where: { id } })

    if (question) {
      return question
    }

    throw new HttpException('Помилка оновлення запитання по id', HttpStatus.BAD_REQUEST)
  }
}
