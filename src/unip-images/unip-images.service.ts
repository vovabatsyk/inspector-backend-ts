import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { TokenService } from 'src/token/token.service'

@Injectable()
export class UnipImagesService {
  constructor(private readonly httpService: HttpService, private tokenService: TokenService) {}

  async getById(id) {
    const { value } = await this.tokenService.getById(1)

    const res = await this.httpService.axiosRef.get(
      `https://inspector-webapi-qa.unip.com.ua/api/export/fine?id=${id}`,
      {
        headers: {
          Authorization: 'Bearer ' + value,
        },
      }
    )

    return res.data.Data.Images
  }
}
