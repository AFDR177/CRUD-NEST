import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { UserService } from './user.service';
import { PrismaService } from './prisma.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { PrismaModule } from './prisma.module';
import { PostService } from './post/post.service';
import { CommentsService } from './comment/comments.service';

@Module({
  // imports: [],
  imports: [
    ConfigModule.forRoot(),
    PrismaModule,
    UserModule,
    PostModule,
    CommentModule,
  ],
  // controllers: [AppController],
  providers: [PrismaService, PostService, CommentsService],
  exports: [PrismaService],
})
export class AppModule {}
