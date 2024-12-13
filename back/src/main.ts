import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //глобальный кастомный провайдер для валидации через class-validator
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  // Включение валидации на уровне всего приложения
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
