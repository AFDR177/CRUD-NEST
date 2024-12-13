import { PrismaService } from './prisma.service';
import { Comment, Prisma } from '@prisma/client';
export declare class CommentService {
    private prisma;
    constructor(prisma: PrismaService);
    comment(commentWhereUniqueInput: Prisma.CommentWhereUniqueInput): Promise<Comment | null>;
    comments(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.CommentWhereUniqueInput;
        where?: Prisma.CommentWhereInput;
        orderBy?: Prisma.PostOrderByWithRelationInput;
    }): Promise<Comment[]>;
    createPost(data: Prisma.PostCreateInput): Promise<Comment>;
    updatePost(params: {
        where: Prisma.PostWhereUniqueInput;
        data: Prisma.PostUpdateInput;
    }): Promise<Comment>;
    deletePost(where: Prisma.PostWhereUniqueInput): Promise<Comment>;
}
