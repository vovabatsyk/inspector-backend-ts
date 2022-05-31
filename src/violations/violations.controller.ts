import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreateViolationDto } from './dto/create-violation-dto'
import { Violation } from './violation.model'
import { ViolationsService } from './violations.service'

@ApiTags('Порушення')
@Controller('api/violations')
export class ViolationsController {
  constructor(private violationService: ViolationsService) {}

  @ApiOperation({ summary: 'Створити порушення' })
  @ApiResponse({ status: 200, type: [Violation] })
  @Post()
  createPost(@Body() dto: CreateViolationDto) {
    return this.violationService.create(dto)
  }

  @ApiOperation({ summary: 'Получити  всі порушення' })
  @ApiResponse({ status: 200 })
  @Get()
  getPosts() {
    return this.violationService.getAll()
  }

  @ApiOperation({ summary: 'Получити порушення' })
  @ApiResponse({ status: 200, type: [Violation] })
  @Get(':id')
  getById(@Param('id') id: string) {
    return this.violationService.getById(id)
  }

  @ApiOperation({ summary: 'Видалити порушення' })
  @ApiResponse({ status: 200, type: [Post] })
  @Delete(':id')
  deletePost(@Param('id') id: string) {
    return this.violationService.delete(id)
  }

  @ApiOperation({ summary: 'Змінити новину' })
  @ApiResponse({ status: 200 })
  @Put(':id')
  updatePost(@Param('id') id: string, @Body() dto: CreateViolationDto) {
    return this.violationService.update(id, dto)
  }
}
