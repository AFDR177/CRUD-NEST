import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  async createComment(@Body() createCommentDto: CreateCommentDto) {
    const { content, authorId, postId } = createCommentDto;
    console.log('createComment==>', content, authorId, postId);
    return this.commentsService.createComment({ content, authorId, postId });
  }

  @Get('post/:postId')
  async getCommentsByPost(@Param('postId') postId: string) {
    console.log('postId=====>', postId);
    return this.commentsService.getCommentsByPost(parseInt(postId));
  }

  @Delete(':id')
  async deleteComment(@Param('id') id: string) {
    return this.commentsService.deleteComment(parseInt(id));
  }
}
