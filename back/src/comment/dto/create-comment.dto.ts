import { IsNumber, IsString } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  content: string; // Текст комментария

  @IsNumber()
  postId: number; // ID поста, к которому привязан комментарий

  @IsString()
  author: string;
  // authorId: number; // ID автора (пользователя)
}

// import { IsString, IsInt } from 'class-validator';

// export class CreateCommentDto {
//   @IsString()
//   content: string;

//   @IsInt()
//   postId: number;

//   @IsString()
//   author: string;
// }
