import { IsEmail, Validate, IsOptional, IsString } from 'class-validator';
import { IsEmailUnique } from './is-email-unique.validator';

export class CreateUserDto {
  @IsEmail()
  @Validate(IsEmailUnique)
  email: string;

  @IsOptional()
  @IsString()
  name?: string;
}
