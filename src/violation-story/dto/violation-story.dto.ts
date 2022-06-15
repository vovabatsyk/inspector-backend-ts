import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class CreateViolationStoryDto {
  @ApiProperty({ example: 'Пішохідний перехід (зупинка)!', description: 'Назва фабули' })
  @IsString({ message: 'Повинен бути string' })
  readonly title: string

  @ApiProperty({
    example:
      'водій даного т/з здійснив зупинку на пішохідному переході, що створює перешкоду руху пішоходам, чим порушив п.15.9 "г" ПДР України.',
    description: 'Опис фабули фабули',
  })
  @IsString({ message: 'Повинен бути string' })
  readonly description: string
}
