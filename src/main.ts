import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    //Indica a NestJS que elimine cualquier propiedad de la solicitud que no esté en el DTOs
    whitelist: true,
    /**
     * se combina con whitelist: true, en lugar de simplemente eliminar
     * esas propiedades no esperadas, provoca que el ValidationPipe detenga el procesamiento y devuelva un error
     */
    forbidNonWhitelisted: true,
  }));

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
