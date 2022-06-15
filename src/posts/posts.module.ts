import { forwardRef, Module } from '@nestjs/common'
import { PostsService } from './posts.service'
import { PostsController } from './posts.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { User } from 'src/users/user.model'
import { Post } from './post.model'
import { FilesModule } from 'src/files/files.module'
import { AuthModule } from 'src/auth/auth.module'

@Module({
  providers: [PostsService],
  controllers: [PostsController],
  imports: [SequelizeModule.forFeature([User, Post]), FilesModule, forwardRef(() => AuthModule)],
})
export class PostsModule {}
