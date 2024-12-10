import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Делаем модуль глобальным, чтобы его не нужно было импортировать в каждом модуле
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Экспортируем для использования в других модулях
})
export class PrismaModule {}
