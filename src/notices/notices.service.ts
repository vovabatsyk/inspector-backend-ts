import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateNoticeDto } from './dto/create-notice.dto'
import { Notice } from './notise.model'

@Injectable()
export class NoticesService {
  constructor(@InjectModel(Notice) private noticeRepository: typeof Notice) {}

  async create(dto: CreateNoticeDto) {
    const notice = await this.noticeRepository.create(dto)

    return notice
  }

  async getAll() {
    const notices = await this.noticeRepository.findAll()

    return notices
  }

  async getById(id) {
    const notice = await this.noticeRepository.findByPk(id)
    return notice
  }

  async delete(id) {
    const notice = this.noticeRepository.destroy({ where: { id } })
    return notice
  }

  async update(id, dto: CreateNoticeDto) {
    const notice = await this.noticeRepository.update({ ...dto }, { where: { id } })
    return notice
  }
}
