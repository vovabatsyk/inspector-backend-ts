import { SequelizeModule } from '@nestjs/sequelize'
import { Module } from '@nestjs/common'
import { UsersModule } from './users/users.module'
import { ConfigModule } from '@nestjs/config'
import { User } from './users/user.model'
import { RolesModule } from './roles/roles.module'
import { Role } from './roles/roles.model'
import { UserRoles } from './roles/user-roles.model'
import { AuthModule } from './auth/auth.module'
import { PostsModule } from './posts/posts.module'
import { Post } from './posts/post.model'
import { FilesModule } from './files/files.module'
import { ServeStaticModule } from '@nestjs/serve-static'
import { NoticesModule } from './notices/notices.module'
import * as path from 'path'
import { Notice } from './notices/notise.model'
import { QuestionsModule } from './questions/questions.module'
import { Question } from './questions/question.model'
import { PaymentModule } from './payment/payment.module'
import { Payment } from './payment/payment.model'
import { ViolationsModule } from './violations/violations.module'
import { Violation } from './violations/violation.model'
import { ViolationImagesModule } from './violation-images/violation-images.module'
import { ViolationImages } from './violation-images/violation-images.model'
import { ViolationStoryModule } from './violation-story/violation-story.module'
import { ViolationStory } from './violation-story/violation-story.model'

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    SequelizeModule.forRoot({
      dialect: 'mariadb',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      models: [
        User,
        Role,
        UserRoles,
        Post,
        Notice,
        Question,
        Payment,
        Violation,
        ViolationImages,
        ViolationStory,
      ],
      autoLoadModels: true,
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    PostsModule,
    FilesModule,
    NoticesModule,
    QuestionsModule,
    PaymentModule,
    ViolationsModule,
    ViolationImagesModule,
    ViolationStoryModule,
  ],
})
export class AppModule {}
