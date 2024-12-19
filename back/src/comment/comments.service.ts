import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Comment } from '@prisma/client';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}

  async createComment(data: {
    content: string;
    authorId: number;
    postId: number;
  }): Promise<Comment> {
    return this.prisma.comment.create({
      data: {
        content: data.content,
        authorId: data.authorId, // Привязка автора через connect
        postId: data.postId, // Привязка поста через connect
      },
    });
  }

  async getCommentsByPost(postId: number): Promise<Comment[]> {
    return this.prisma.comment.findMany({
      where: { postId },
      include: { author: { select: { name: true } } },
    });
  }

  async deleteComment(id: number): Promise<Comment> {
    return this.prisma.comment.delete({
      where: { id },
    });
  }
}
