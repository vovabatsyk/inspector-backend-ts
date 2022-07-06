import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { TokenController } from './token.controller'
import { Token } from './token.model'
import { TokenService } from './token.service'

@Module({
  controllers: [TokenController],
  providers: [TokenService],
  imports: [SequelizeModule.forFeature([Token])],
})
export class TokenModule {}
