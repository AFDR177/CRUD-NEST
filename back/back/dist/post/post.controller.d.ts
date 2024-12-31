import { Post as PostModel } from '@prisma/client';
import { PostService } from './post.service';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    getPublishedPosts(): Promise<PostModel[]>;
    getFilteredPosts(searchString: string): Promise<PostModel[]>;
    getPostById(id: string): Promise<PostModel>;
    createDraft(postData: {
        title: string;
        content?: string;
        published?: boolean;
        authorEmail: string;
    }): Promise<PostModel>;
    upDatePost(postData: {
        id?: number;
        title: string;
        content?: string;
        published?: boolean;
    }): Promise<PostModel>;
    publishPost(id: string): Promise<PostModel>;
    deletePost(id: string): Promise<PostModel>;
}
