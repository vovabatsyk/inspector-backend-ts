import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { CreateRoleDto } from './dto/create-role-dto'
import { RolesService } from './roles.service'

@ApiTags('Тип користувача')
@Controller('api/roles')
export class RolesController {
  constructor(private roleService: RolesService) {}

  @ApiOperation({ summary: 'Створити тип користувача' })
  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.roleService.createRole(dto)
  }

  @ApiOperation({ summary: 'Получити тип користувача' })
  @Get('/:value')
  getByValue(@Param('value') value: string) {
    return this.roleService.getRoleByValue(value)
  }
}
