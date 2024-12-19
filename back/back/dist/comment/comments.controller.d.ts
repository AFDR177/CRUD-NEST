import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    createComment(createCommentDto: CreateCommentDto): Promise<{
        id: number;
        content: string | null;
        authorId: number;
        postId: number;
    }>;
    getCommentsByPost(postId: string): Promise<{
        id: number;
        content: string | null;
        authorId: number;
        postId: number;
    }[]>;
    deleteComment(id: string): Promise<{
        id: number;
        content: string | null;
        authorId: number;
        postId: number;
    }>;
}
