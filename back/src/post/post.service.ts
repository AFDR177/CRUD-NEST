import { Injectable } from '@nestjs/common';
import { Post, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async post(
    // этот метод обращаеться к Prisma Client который подключен к БД (к модели Post)
    //выполняет поиск по одной уникальной записи (в данном случае по id)
    //и выдает эту запись (данном случае выдает id Post)
    postWhereUniqueInput: Prisma.PostWhereUniqueInput,
  ): Promise<Post | null> {
    return this.prisma.post.findUnique({
      where: postWhereUniqueInput,
    });
  }

  async posts(params: {
    //метод выполняет запрос нескольких записей из БД по таблице Post
    //использует разные параметры фильтрации, сортировки, кол-во возвр. записей
    skip?: number;
    take?: number;
    cursor?: Prisma.PostWhereUniqueInput;
    where?: Prisma.PostWhereInput;
    orderBy?: Prisma.PostOrderByWithRelationInput;
  }): Promise<Post[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.post.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createPost(data: Prisma.PostCreateInput): Promise<Post> {
    return this.prisma.post.create({
      data,
    });
  }

  async updatePost(params: {
    where: Prisma.PostWhereUniqueInput;
    data: Prisma.PostUpdateInput;
  }): Promise<Post> {
    const { data, where } = params;
    return this.prisma.post.update({
      data,
      where,
    });
  }

  async deletePost(where: Prisma.PostWhereUniqueInput): Promise<Post> {
    return this.prisma.post.delete({
      where,
    });
  }

  //   post(arg0: { id: number }):
  //     | {
  //         content: string | null;
  //         title: string;
  //         id: number;
  //         published: boolean | null;
  //         authorId: number | null;
  //       }
  //     | PromiseLike<{
  //         content: string | null;
  //         title: string;
  //         id: number;
  //         published: boolean | null;
  //         authorId: number | null;
  //       }> {
  //     throw new Error('Method not implemented.');
  //   }
}
