import { IsEmail, IsOptional, IsString, Validate } from 'class-validator';
import { IsEmailUnique } from './is-email-unique.validator';

export class CreateUserDto {
  @IsEmail()
  @Validate(IsEmailUnique)
  email: string;

  @IsOptional()
  @IsString()
  name?: string;
}
