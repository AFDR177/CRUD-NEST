import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { IsEmailUnique } from './dto/is-email-unique.validator';
// import { AppModule } from '../app.module';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService, IsEmailUnique],
})
export class UserModule {}