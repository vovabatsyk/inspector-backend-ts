import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import * as fs from 'fs'
import * as path from 'path'
import * as uuid from 'uuid'

@Injectable()
export class FilesService {
  async createFile(file): Promise<string> {
    try {
      const fileName = uuid.v4() + '.jpg'
      const filePath = path.resolve(__dirname, '..', 'static')
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true })
      }
      fs.writeFileSync(path.join(filePath, fileName), file.buffer)

      return fileName
    } catch (e) {
      throw new HttpException('Помилка збереження файла', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async deleteFile(filename: string) {
    try {
      const filePath = path.resolve(__dirname, '..', 'static')
      fs.unlinkSync(path.join(filePath, filename))
    } catch (err) {
      throw new HttpException('Помилка видалення файла', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
