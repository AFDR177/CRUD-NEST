import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { UserService } from './user.service';
import { PrismaService } from './prisma.service';
import { PostService } from './post.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { PrismaModule } from './prisma.module';

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
  providers: [PrismaService, PostService],
  exports: [PrismaService],
})
export class AppModule {}
