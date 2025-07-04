import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swagger = new DocumentBuilder()
    .setTitle('Node Nest')
    .setDescription('Rest Api Server built using - Node.js, Nest.js')
    .setVersion('v1')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, swagger);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 4003, () => {
    console.log(`server running at: 🚀 http://localhost:${process.env.PORT ?? 4003} 🚀`);
  });
}

void bootstrap();
