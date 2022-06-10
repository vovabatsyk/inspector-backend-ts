import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'
import { Roles } from 'src/auth/roles-auth.decorator'
import { RolesGuard } from 'src/auth/roles.guard'
import { CreatePostDto } from './dto/create-post.dto'
import { PostsService } from './posts.service'

@ApiTags('Новини')
@Controller('api/posts')
export class PostsController {
  constructor(private postService: PostsService) {}

  @ApiOperation({ summary: 'Створити новину' })
  @ApiResponse({ status: 200, type: [Post] })
  @UseGuards(JwtAuthGuard)
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  createPost(@Body() dto: CreatePostDto, @UploadedFile() image) {
    return this.postService.create(dto, image)
  }

  @ApiOperation({ summary: 'Получити новини' })
  @ApiResponse({ status: 200 })
  @Get()
  getPosts() {
    return this.postService.getAll()
  }

  @ApiOperation({ summary: 'Получити новину' })
  @ApiResponse({ status: 200, type: [Post] })
  @Get(':id')
  getById(@Param('id') id: string) {
    return this.postService.getById(id)
  }

  @ApiOperation({ summary: 'Видалити новину' })
  @ApiResponse({ status: 200, type: [Post] })
  @UseGuards(JwtAuthGuard)
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Delete(':id')
  deletePost(@Param('id') id: string) {
    return this.postService.delete(id)
  }

  @ApiOperation({ summary: 'Змінити новину' })
  @ApiResponse({ status: 200 })
  @UseGuards(JwtAuthGuard)
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Put(':id')
  updatePost(@Param('id') id: string, @Body() dto: CreatePostDto) {
    return this.postService.update(id, dto)
  }
}
