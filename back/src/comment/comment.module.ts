import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { PrismaModule } from 'src/prisma.module';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [CommentsController],
  providers: [CommentsService, PrismaService],
  exports: [PrismaService],
})
export class CommentModule {}
