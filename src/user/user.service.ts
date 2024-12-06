import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  //.findUnique - ищет запись User (email) который точно соответствует уникальным условиям (в модели @unique)
  async user(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  //.findMany - Получить список польлзователей из БД по заданым критериям: skip (сколько пропуститьс начала) и take (сколько взять),
  // cursor (точка начала выборки), where (Фильтрацию), orderBy (Сортировку)
  async users(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  //Создаем польлзователя
  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
    // // 1. Проверяем, существует ли уже пользователь с таким email
    // const existingUser = await this.prisma.user.findUnique({
    //   where: { email: data.email },
    // });

    // // 2. Если пользователь с таким email уже существует, выбрасываем исключение
    // if (existingUser) {
    //   throw new ConflictException('Email already exists');
    // }

    // // 3. Если email уникален, создаем пользователя
    // return this.prisma.user.create({
    //   data,
    // });
    // try {
    //   return this.prisma.user.create({
    //     data,
    //   });
    // } catch (err) {
    //   if (err.code === 'P2002') {
    //     console.log('Error TRY!!!!');
    //     throw new ConflictException('Email already exists');
    //   }
    //   throw err;
    // }
  }

  //Обновить польлзователя
  async updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }
  //Удалить пользователя
  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }

  //Поиск пользователя по его email (для аутинтификации или создания нового пользователя)
  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { email } }); // NEW
  }
}
