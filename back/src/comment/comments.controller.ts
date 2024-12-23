import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  async createComment(@Body() createCommentDto: CreateCommentDto) {
    console.log('Тело запроса:', createCommentDto);

    const { content, postId, author } = createCommentDto;

    console.log('createComment==>', content, postId, author);
    return this.commentsService.createComment({ content, postId, author });
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
