import {
  Controller,
  Get,
  //   Param,
  Post,
  Body,
  //   Put,
  //   Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  async signupUser(@Body() createUserDto: CreateUserDto): Promise<UserModel> {
    return this.userService.createUser(createUserDto);
  }

  @Post('signin') // Новый маршрут
  async signinUser(
    @Body() body: { email: string; name: string },
  ): Promise<{ message: string }> {
    const { email } = body;

    // Проверяем существование пользователя
    const user = await this.userService.findByEmail(email);

    if (!user) {
      // Если пользователь не найден, выбрасываем ошибку
      throw new Error(
        'Такого пользователя нет в базе, нужно зарегистрироваться.',
      );
    }

    // Возвращаем успешный ответ
    return { message: 'Вход выполнен успешно.' };
  }

  @Get('users')
  async getAllUsers(): Promise<UserModel[]> {
    return this.userService.users({});
  }

  
}
