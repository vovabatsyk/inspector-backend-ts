import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { TokenDto } from './dto/token.dto'
import { Token } from './token.model'

@Injectable()
export class TokenService {
  constructor(@InjectModel(Token) private tokenRepository: typeof Token) {}

  async getById(id) {
    const token = await this.tokenRepository.findByPk(id)
    if (token) {
      return token
    }

    throw new HttpException('Помилка пошуку токена по id', HttpStatus.NOT_FOUND)
  }

  async update(id, dto: TokenDto) {
    const token = await this.tokenRepository.update({ ...dto }, { where: { id } })
    if (token) {
      return token
    }

    throw new HttpException('Помилка оновлення токена по id', HttpStatus.NOT_FOUND)
  }
}
