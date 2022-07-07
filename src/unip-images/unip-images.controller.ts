import { Controller, Get, Param } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { UnipImagesService } from './unip-images.service'

@ApiTags('Фото правопорушення Unip')
@Controller('api/unip-images')
export class UnipImagesController {
  constructor(private violationImageUnipService: UnipImagesService) {}

  @ApiOperation({ summary: 'Получити зображення по номеру постанови' })
  @ApiResponse({ status: 200 })
  @Get('/:violationUnipId')
  getViolationImagesById(@Param('violationUnipId') value: string) {
    return this.violationImageUnipService.getById(value)
  }
}
