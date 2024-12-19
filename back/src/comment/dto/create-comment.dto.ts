export class CreateCommentDto {
  content: string; // Текст комментария
  authorId: number; // ID автора (пользователя)
  postId: number; // ID поста, к которому привязан комментарий
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
