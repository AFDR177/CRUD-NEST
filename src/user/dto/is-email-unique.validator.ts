import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@ValidatorConstraint({ async: true })
@Injectable()
export class IsEmailUnique implements ValidatorConstraintInterface {
  constructor(private prisma: PrismaService) {}

  async validate(email: string): Promise<boolean> {
    console.log('Checking user existence:', email);
    const user = await this.prisma.user.findUnique({ where: { email } });
    console.log('Found user:', user);
    return !user; // Email считается уникальным, если пользователя нет

    // try {
    //   const user = await this.prisma.user.findUnique({ where: { email } });
    //   return !user; // Если пользователь найден, email не уникален
    // } catch (err) {
    //   console.error('Prisma error:', err); // Логирование ошибки
    //   throw new Error('Database error');
    // }
  }

  defaultMessage(args: ValidationArguments): string {
    return `Email: "${args.value}" уже существуюет, введите другой`;
  }
  // defaultMessage(): string {
  //   return `Email already exists`;
  // }
}
