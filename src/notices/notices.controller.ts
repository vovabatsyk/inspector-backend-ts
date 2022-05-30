import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreateNoticeDto } from './dto/create-notice.dto'
import { NoticesService } from './notices.service'
import { Notice } from './notise.model'

@ApiTags('Огогошення')
@Controller('api/notices')
export class NoticesController {
  constructor(private noticeService: NoticesService) {}

  @ApiOperation({ summary: 'Створити оголошення' })
  @ApiResponse({ status: 200, type: [Notice] })
  @Post()
  createPost(@Body() dto: CreateNoticeDto) {
    return this.noticeService.create(dto)
  }

  @ApiOperation({ summary: 'Получити всі оголошення' })
  @ApiResponse({ status: 200 })
  @Get()
  getPosts() {
    return this.noticeService.getAll()
  }

  @ApiOperation({ summary: 'Получити оголошення' })
  @ApiResponse({ status: 200, type: [Notice] })
  @Get(':id')
  getById(@Param('id') id: string) {
    return this.noticeService.getById(id)
  }

  @ApiOperation({ summary: 'Видалити оголошення' })
  @ApiResponse({ status: 200, type: [Notice] })
  @Delete(':id')
  deletePost(@Param('id') id: string) {
    return this.noticeService.delete(id)
  }

  @ApiOperation({ summary: 'Змінити оголошення' })
  @ApiResponse({ status: 200 })
  @Put(':id')
  updatePost(@Param('id') id: string, @Body() dto: CreateNoticeDto) {
    return this.noticeService.update(id, dto)
  }
}
