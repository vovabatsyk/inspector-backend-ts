import { Injectable } from '@nestjs/common'
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

    return post
  }

  async getAll() {
    const posts = await this.postRepository.findAll()
    return posts
  }

  async getById(id) {
    const post = await this.postRepository.findByPk(id)
    return post
  }

  async delete(id) {
    const post = this.postRepository.destroy({ where: { id } })
    return post
  }

  async update(dto: CreatePostDto, id) {
    const post = await this.postRepository.update({ ...dto }, { where: { id } })
    return post
  }
}
