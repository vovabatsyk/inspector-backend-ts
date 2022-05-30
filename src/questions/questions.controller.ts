import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreateQuestionDto } from './dto/create-question.dto'
import { Question } from './question.model'
import { QuestionsService } from './questions.service'

@ApiTags('Часто задавані питання')
@Controller('api/questions')
export class QuestionsController {
  constructor(private questionService: QuestionsService) {}

  @ApiOperation({ summary: 'Створити запитання' })
  @ApiResponse({ status: 200, type: [Question] })
  @Post()
  createPost(@Body() dto: CreateQuestionDto) {
    return this.questionService.create(dto)
  }

  @ApiOperation({ summary: 'Получити всі запитання' })
  @ApiResponse({ status: 200 })
  @Get()
  getPosts() {
    return this.questionService.getAll()
  }

  @ApiOperation({ summary: 'Получити запитання' })
  @ApiResponse({ status: 200, type: [Question] })
  @Get(':id')
  getById(@Param('id') id: string) {
    return this.questionService.getById(id)
  }

  @ApiOperation({ summary: 'Видалити запитання' })
  @ApiResponse({ status: 200, type: [Question] })
  @Delete(':id')
  deletePost(@Param('id') id: string) {
    return this.questionService.delete(id)
  }

  @ApiOperation({ summary: 'Змінити запитання' })
  @ApiResponse({ status: 200 })
  @Put(':id')
  updatePost(@Param('id') id: string, @Body() dto: CreateQuestionDto) {
    return this.questionService.update(id, dto)
  }
}
