import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateViolationStoryDto } from './dto/violation-story.dto'

import { ViolationStory } from './violation-story.model'

@Injectable()
export class ViolationStoryService {
  constructor(@InjectModel(ViolationStory) private storyRepository: typeof ViolationStory) {}

  async create(dto: CreateViolationStoryDto) {
    const story = await this.storyRepository.create(dto)
    if (story) {
      return story
    }

    throw new HttpException('Помилка створення фабули', HttpStatus.BAD_REQUEST)
  }

  async getAll() {
    const stories = await this.storyRepository.findAll()
    if (stories) {
      return stories
    }
    throw new HttpException('Помилка запросу фабул', HttpStatus.BAD_REQUEST)
  }

  async getById(id) {
    const story = await this.storyRepository.findByPk(id)
    if (story) {
      return story
    }
    throw new HttpException('Фабула не знайдена', HttpStatus.NOT_FOUND)
  }

  async delete(id) {
    const story = this.storyRepository.destroy({ where: { id } })
    if (story) {
      return story
    }

    throw new HttpException('Помилка видалення фабули', HttpStatus.BAD_REQUEST)
  }

  async update(id, dto: CreateViolationStoryDto) {
    const story = await this.storyRepository.update({ ...dto }, { where: { id } })
    if (story) {
      return story
    }
    throw new HttpException('Помилка оновлення фабули', HttpStatus.BAD_REQUEST)
  }
}
