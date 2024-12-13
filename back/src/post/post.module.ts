import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { PrismaModule } from 'src/prisma.module';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [PostController],
  providers: [PostService, PrismaService],
  exports: [PrismaService],
})
export class PostModule {}
