import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { FilesService } from 'src/files/files.service'
import { CreatePostDto } from './dto/create-post.dto'
import { Post } from './post.model'

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post) private postRepository: typeof Post,
    private fileService: FilesService
  ) {}

  async create(dto: CreatePostDto, image: string) {
    const fileName = await this.fileService.createFile(image)
    const post = await this.postRepository.create({ ...dto, image: fileName })

    if (post) {
      return post
    }

    throw new HttpException('Помилка створення новини', HttpStatus.BAD_REQUEST)
  }

  async getAll() {
    const posts = await this.postRepository.findAll()
    if (posts) {
      return posts
    }

    throw new HttpException('Помилка загрузки новин', HttpStatus.BAD_REQUEST)
  }

  async getById(id) {
    const post = await this.postRepository.findByPk(id)
    if (post) {
      return post
    }

    throw new HttpException('Помилка загрузки новини по id', HttpStatus.NOT_FOUND)
  }

  async delete(id) {
    const post = await this.postRepository.findByPk(id)
    if (post) {
      this.fileService.deleteFile(post.image)
    }
    const postDeleted = this.postRepository.destroy({ where: { id } })

    if (post) {
      return postDeleted
    }
    throw new HttpException('Помилка видалення новини по id', HttpStatus.NOT_FOUND)
  }

  async update(id, dto: CreatePostDto) {
    const post = await this.postRepository.update({ ...dto }, { where: { id } })

    if (post) {
      return post
    }

    throw new HttpException('Помилка оновлення новини по id', HttpStatus.BAD_REQUEST)
  }
}
