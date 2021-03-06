import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function start() {
  const PORT = 5000

  const app = await NestFactory.create(AppModule)

  app.enableCors()

  const config = new DocumentBuilder()
    .setTitle('Управління безпеки')
    .setDescription('Відділ інспекторів з паркування')
    .setVersion('1.0.0')
    .addTag('vovabatsyk.lviv@gmail.com')
    .build()

  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('/api/docs', app, document)

  await app.listen(PORT, () => console.log(`Server started on port:${PORT}`))
}

start()
