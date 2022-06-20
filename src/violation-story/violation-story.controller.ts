import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'
import { Roles } from 'src/auth/roles-auth.decorator'
import { RolesGuard } from 'src/auth/roles.guard'
import { CreateViolationStoryDto } from './dto/violation-story.dto'
import { ViolationStory } from './violation-story.model'
import { ViolationStoryService } from './violation-story.service'

@ApiTags('Фабули')
@Controller('api/violation-story')
export class ViolationStoryController {
  constructor(private storyService: ViolationStoryService) {}

  @ApiOperation({ summary: 'Створити фабулу' })
  @ApiResponse({ status: 200, type: [ViolationStory] })
  @UseGuards(JwtAuthGuard)
  @Post()
  createPost(@Body() dto: CreateViolationStoryDto) {
    return this.storyService.create(dto)
  }

  @ApiOperation({ summary: 'Получити всі фабули' })
  @ApiResponse({ status: 200 })
  @Get()
  getPosts() {
    return this.storyService.getAll()
  }

  @ApiOperation({ summary: 'Получити фабулу' })
  @ApiResponse({ status: 200, type: [ViolationStory] })
  @Get(':id')
  getById(@Param('id') id: string) {
    return this.storyService.getById(id)
  }

  @ApiOperation({ summary: 'Видалити фабулу' })
  @ApiResponse({ status: 200, type: [ViolationStoryService] })
  @UseGuards(JwtAuthGuard)
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Delete(':id')
  deletePost(@Param('id') id: string) {
    return this.storyService.delete(id)
  }

  @ApiOperation({ summary: 'Змінити фабулу' })
  @ApiResponse({ status: 200 })
  @UseGuards(JwtAuthGuard)
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Put(':id')
  updatePost(@Param('id') id: string, @Body() dto: CreateViolationStoryDto) {
    return this.storyService.update(id, dto)
  }
}
