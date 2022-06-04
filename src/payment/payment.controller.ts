import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'
import { Roles } from 'src/auth/roles-auth.decorator'
import { RolesGuard } from 'src/auth/roles.guard'
import { CreatePaymentDto } from './dto/create-payment.dto'
import { Payment } from './payment.model'
import { PaymentService } from './payment.service'

@ApiTags('Реквізити оплати штрафу')
@Controller('api/payment')
export class PaymentController {
  constructor(private paymentService: PaymentService) {}

  @ApiOperation({ summary: 'Створити реквізити' })
  @ApiResponse({ status: 200, type: [Payment] })
  @UseGuards(JwtAuthGuard)
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Post()
  createPost(@Body() dto: CreatePaymentDto) {
    return this.paymentService.create(dto)
  }

  @ApiOperation({ summary: 'Получити всі реквізити' })
  @ApiResponse({ status: 200 })
  @Get()
  getPosts() {
    return this.paymentService.getAll()
  }

  @ApiOperation({ summary: 'Получити реквізити' })
  @ApiResponse({ status: 200, type: [Payment] })
  @Get(':id')
  getById(@Param('id') id: string) {
    return this.paymentService.getById(id)
  }

  @ApiOperation({ summary: 'Видалити реквізити' })
  @ApiResponse({ status: 200, type: [Payment] })
  @UseGuards(JwtAuthGuard)
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Delete(':id')
  deletePost(@Param('id') id: string) {
    return this.paymentService.delete(id)
  }

  @ApiOperation({ summary: 'Змінити реквізити' })
  @ApiResponse({ status: 200 })
  @UseGuards(JwtAuthGuard)
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Put(':id')
  updatePost(@Param('id') id: string, @Body() dto: CreatePaymentDto) {
    return this.paymentService.update(id, dto)
  }
}
