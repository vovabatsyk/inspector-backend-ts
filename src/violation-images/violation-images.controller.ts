import { Body, Controller, Get, Param, Post, UploadedFiles, UseInterceptors } from '@nestjs/common'
import { FilesInterceptor } from '@nestjs/platform-express'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreateViolationDto } from 'src/violations/dto/create-violation-dto'
import { CreateViolationImagesDto } from './dto/create-violation-images.dto'
import { ViolationImages } from './violation-images.model'
import { ViolationImagesService } from './violation-images.service'

@ApiTags('Фото правопорушення')
@Controller('api/violation-images')
export class ViolationImagesController {
  constructor(private violationImageService: ViolationImagesService) {}

  @ApiOperation({ summary: 'Завантадити зображення' })
  @ApiResponse({ status: 200 })
  @Post()
  @UseInterceptors(FilesInterceptor('image'))
  createPost(@Body() dto: CreateViolationImagesDto, @UploadedFiles() images) {
    console.log(images)

    return this.violationImageService.create(dto, images)
  }

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
