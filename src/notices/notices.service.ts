import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateNoticeDto } from './dto/create-notice.dto'
import { Notice } from './notise.model'

@Injectable()
export class NoticesService {
  constructor(@InjectModel(Notice) private noticeRepository: typeof Notice) {}

  async create(dto: CreateNoticeDto) {
    const notice = await this.noticeRepository.create(dto)

    if (notice) {
      return notice
    }

    throw new HttpException('Помилка створення повідомлення', HttpStatus.BAD_REQUEST)
  }

  async getAll() {
    const notices = await this.noticeRepository.findAll()

    if (notices) {
      return notices
    }

    throw new HttpException('Помилка загрузки повідомленнь', HttpStatus.BAD_REQUEST)
  }

  async getById(id) {
    const notice = await this.noticeRepository.findByPk(id)
    if (notice) {
      return notice
    }

    throw new HttpException('Помилка пошуку повідомлення по id', HttpStatus.NOT_FOUND)
  }

  async delete(id) {
    const notice = this.noticeRepository.destroy({ where: { id } })
    if (notice) {
      return notice
    }
    throw new HttpException('Помилка видалення повідомлення по id', HttpStatus.NOT_FOUND)
  }

  async update(id, dto: CreateNoticeDto) {
    const notice = await this.noticeRepository.update({ ...dto }, { where: { id } })
    if (notice) {
      return notice
    }

    throw new HttpException('Помилка оновлення повідомлення по id', HttpStatus.NOT_FOUND)
  }
}
