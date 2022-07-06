import { Body, Controller, Get, Param, Put } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { TokenDto } from './dto/token.dto'
import { Token } from './token.model'
import { TokenService } from './token.service'

@ApiTags('Токен')
@Controller('api/token')
export class TokenController {
  constructor(private tokenService: TokenService) {}

  @ApiOperation({ summary: 'Получити токен' })
  @ApiResponse({ status: 200, type: [Token] })
  @Get(':id')
  getById(@Param('id') id: string) {
    return this.tokenService.getById(id)
  }

  @ApiOperation({ summary: 'Змінити токен' })
  @ApiResponse({ status: 200 })
  @Put(':id')
  updateToken(@Param('id') id: string, @Body() dto: TokenDto) {
    return this.tokenService.update(id, dto)
  }
}
