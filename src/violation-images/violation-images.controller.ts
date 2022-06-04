import { Body, Controller, Get, Param } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreateViolationDto } from 'src/violations/dto/create-violation-dto'
import { ViolationImages } from './violation-images.model'
import { ViolationImagesService } from './violation-images.service'

@ApiTags('Фото правопорушення')
@Controller('violation-images')
export class ViolationImagesController {
  constructor(private violationImageService: ViolationImagesService) {}

  @ApiOperation({ summary: 'Получити усі зображення' })
  @ApiResponse({ status: 200, type: ViolationImages })
  @Get()
  getViolationImages() {
    return this.violationImageService.getAll()
  }

  @ApiOperation({ summary: 'Получити зображення по номеру постанови' })
  @ApiResponse({ status: 200, type: ViolationImages })
  @Get('/:violationId')
  getViolationImagesByNumber(@Param('violationId') value: string) {
    return this.violationImageService.getByValue(value)
  }
}
