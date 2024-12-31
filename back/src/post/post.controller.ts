import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Post as PostModel } from '@prisma/client';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('/feed') //Получить все опубликованные посты
  async getPublishedPosts(): Promise<PostModel[]> {
    try {
      return this.postService.posts({
        where: { published: true },
      });
    } catch (error) {
      console.error('Error while getting posts:', error);
      throw error; // Пробрасываем ошибку
    }
  }

  @Get('filtered-posts/:searchString') //Фильтровать сообщения по title или content
  async getFilteredPosts(
    @Param('searchString') searchString: string,
  ): Promise<PostModel[]> {
    return this.postService.posts({
      where: {
        OR: [
          {
            title: { contains: searchString },
          },
          {
            content: { contains: searchString },
          },
        ],
      },
    });
  }

  @Get('/:id') // Получить один пост по егоid
  async getPostById(@Param('id') id: string): Promise<PostModel> {
    return this.postService.post({ id: Number(id) });
  }

  @Post()
  async createDraft(
    @Body()
    postData: {
      title: string;
      content?: string;
      published?: boolean;
      authorEmail: string;
    },
  ): Promise<PostModel> {
    const { title, content, authorEmail, published = false } = postData;
    return this.postService.createPost({
      title,
      content,
      published,
      author: {
        connect: { email: authorEmail },
      },
    });
  }

  @Post('/:id')
  async upDatePost(
    @Body()
    postData: {
      id?: number;
      title: string;
      content?: string;
      published?: boolean;
    },
  ): Promise<PostModel> {
    const { title, content, published } = postData;

    return this.postService.updatePost({
      where: { id: Number(postData.id) },
      data: { title, content, published },
    });
  }

  @Put('/publish/:id') //Опубликовать пост его id
  async publishPost(@Param('id') id: string): Promise<PostModel> {
    return this.postService.updatePost({
      where: { id: Number(id) },
      data: { published: true },
    });
  }

  @Delete('/:id') //Удалить пост по его id
  async deletePost(@Param('id') id: string): Promise<PostModel> {
    return this.postService.deletePost({ id: Number(id) });
  }
}
