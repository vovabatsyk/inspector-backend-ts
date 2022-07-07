import { HttpModule } from '@nestjs/axios'
import { forwardRef, Module } from '@nestjs/common'
import { TokenModule } from 'src/token/token.module'
import { TokenService } from 'src/token/token.service'
import { UnipImagesController } from './unip-images.controller'
import { UnipImagesService } from './unip-images.service'

@Module({
  imports: [HttpModule, TokenModule],
  controllers: [UnipImagesController],
  providers: [UnipImagesService],
  exports: [UnipImagesService],
})
export class UnipImagesModule {}
