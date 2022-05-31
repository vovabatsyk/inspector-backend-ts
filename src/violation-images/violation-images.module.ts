import { Module } from '@nestjs/common';
import { ViolationImagesController } from './violation-images.controller';
import { ViolationImagesService } from './violation-images.service';

@Module({
  controllers: [ViolationImagesController],
  providers: [ViolationImagesService]
})
export class ViolationImagesModule {}
