import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'
import { Roles } from 'src/auth/roles-auth.decorator'
import { RolesGuard } from 'src/auth/roles.guard'
import { CreateViolationAdminDto } from './dto/violation-admin.dto'
import { ViolationAdmin } from './violation-admin.model'
import { ViolationAdminService } from './violation-admin.service'

@ApiTags('Статті порушення')
@Controller('api/violation-admin')
export class ViolationAdminController {
  constructor(private violationAdminService: ViolationAdminService) {}

  @ApiOperation({ summary: 'Створити  статтю' })
  @ApiResponse({ status: 200, type: [ViolationAdmin] })
  @UseGuards(JwtAuthGuard)
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() dto: CreateViolationAdminDto) {
    return this.violationAdminService.create(dto)
  }

  @ApiOperation({ summary: 'Получити всі статті' })
  @ApiResponse({ status: 200 })
  @Get()
  getPosts() {
    return this.violationAdminService.getAll()
  }

  @ApiOperation({ summary: 'Получити статтю' })
  @ApiResponse({ status: 200, type: [ViolationAdmin] })
  @Get(':id')
  getById(@Param('id') id: string) {
    return this.violationAdminService.getById(id)
  }

  @ApiOperation({ summary: 'Видалити статтю' })
  @ApiResponse({ status: 200, type: [ViolationAdmin] })
  @UseGuards(JwtAuthGuard)
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Delete(':id')
  deletePost(@Param('id') id: string) {
    return this.violationAdminService.delete(id)
  }

  @ApiOperation({ summary: 'Змінити статтю' })
  @ApiResponse({ status: 200 })
  @UseGuards(JwtAuthGuard)
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Put(':id')
  updatePost(@Param('id') id: string, @Body() dto: CreateViolationAdminDto) {
    return this.violationAdminService.update(id, dto)
  }
}
