import { Module } from '@nestjs/common';
// import { PrismaModule } from 'src/prisma/prisma.module'; // модуль Prisma
import { UserController } from './user.controller';
import { UserService } from './user.service';
// import { AppModule } from '../app.module';
import { IsEmailUnique } from './dto/is-email-unique.validator';
import { PrismaModule } from 'src/prisma.module';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [PrismaService, UserService, IsEmailUnique],
  exports: [PrismaService], // PrismaService Экспортируем для других модулей
})
export class UserModule {}
