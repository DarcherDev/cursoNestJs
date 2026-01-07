import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

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
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
