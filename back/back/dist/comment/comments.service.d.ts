import { PrismaService } from 'src/prisma.service';
import { Comment } from '@prisma/client';
export declare class CommentsService {
    private prisma;
    constructor(prisma: PrismaService);
    createComment(data: {
        content: string;
        authorId: number;
        postId: number;
    }): Promise<Comment>;
    getCommentsByPost(postId: number): Promise<Comment[]>;
    deleteComment(id: number): Promise<Comment>;
}
