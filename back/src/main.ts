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
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  const port = process.env.PORT || 4000;
  await app.listen(port);

  // Логирование маршрутов
  // const server = app.getHttpAdapter().getInstance();
  // const logger = new Logger('Bootstrap');
  // server._router.stack.forEach((middleware) => {
  //   if (middleware.route) {
  //     const route = middleware.route;
  //     logger.log(`Route: ${route.stack[0].method.toUpperCase()} ${route.path}`);
  //   }
  // });

  console.log(`Server running on http://localhost:${port}`);
}
bootstrap();
