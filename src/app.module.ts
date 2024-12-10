import { Module, forwardRef } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { UserService } from './user.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { PostService } from './post.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
    PostModule,
    CommentModule,
    PrismaModule,
    forwardRef(() => UserModule),
  ],
  // controllers: [AppController],
  providers: [PrismaService, PostService],
  exports: [PrismaService], // NEW
})
export class AppModule {}
