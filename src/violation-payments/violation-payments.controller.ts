import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { ViolationPaymentDto } from './dto/violation-payment.dto'
import { ViolationPayment } from './violation-payments.model'
import { ViolationPaymentsService } from './violation-payments.service'

@ApiTags('Оплати')
@Controller('api/violation-payments')
export class ViolationPaymentsController {
  constructor(private violationPaymentService: ViolationPaymentsService) {}

  @ApiOperation({ summary: 'Створити оплату' })
  @ApiResponse({ status: 201, type: [ViolationPayment] })
  @Post()
  createPost(@Body() dto: ViolationPaymentDto) {
    return this.violationPaymentService.create(dto)
  }

  @ApiOperation({ summary: 'Получити оплату' })
  @ApiResponse({ status: 200, type: [ViolationPayment] })
  @Get(':id')
  getById(@Param('id') id: string) {
    return this.violationPaymentService.getById(id)
  }
}
