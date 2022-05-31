import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'
import { Roles } from 'src/auth/roles-auth.decorator'
import { RolesGuard } from 'src/auth/roles.guard'
import { CreateNoticeDto } from './dto/create-notice.dto'
import { NoticesService } from './notices.service'
import { Notice } from './notise.model'

@ApiTags('Огогошення')
@Controller('api/notices')
export class NoticesController {
  constructor(private noticeService: NoticesService) {}

  @ApiOperation({ summary: 'Створити оголошення' })
  @ApiResponse({ status: 200, type: [Notice] })
  @UseGuards(JwtAuthGuard)
  @Roles('admin')
  @UseGuards(RolesGuard)
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
  @UseGuards(JwtAuthGuard)
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Delete(':id')
  deletePost(@Param('id') id: string) {
    return this.noticeService.delete(id)
  }

  @ApiOperation({ summary: 'Змінити оголошення' })
  @ApiResponse({ status: 200 })
  @UseGuards(JwtAuthGuard)
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Put(':id')
  updatePost(@Param('id') id: string, @Body() dto: CreateNoticeDto) {
    return this.noticeService.update(id, dto)
  }
}
