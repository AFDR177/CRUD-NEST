// import { Injectable, ConflictException } from '@nestjs/common';
// import { PrismaService } from './prisma.service';
// import { User, Prisma } from '@prisma/client';

// @Injectable()
// export class UserService {
//   constructor(private prisma: PrismaService) {}

//   async user(
//     userWhereUniqueInput: Prisma.UserWhereUniqueInput,
//   ): Promise<User | null> {
//     return this.prisma.user.findUnique({
//       where: userWhereUniqueInput,
//     });
//   }

//   async users(params: {
//     skip?: number;
//     take?: number;
//     cursor?: Prisma.UserWhereUniqueInput;
//     where?: Prisma.UserWhereInput;
//     orderBy?: Prisma.UserOrderByWithRelationInput;
//   }): Promise<User[]> {
//     const { skip, take, cursor, where, orderBy } = params;
//     return this.prisma.user.findMany({
//       skip,
//       take,
//       cursor,
//       where,
//       orderBy,
//     });
//   }

//   async createUser(data: Prisma.UserCreateInput): Promise<User> {
//     try {
//       return this.prisma.user.create({
//         data,
//       });
//     } catch (err) {
//       if (err.code === 'P2002') {
//         throw new ConflictException('Email already exists');
//       }
//       throw err;
//     }
//   }

//   async updateUser(params: {
//     where: Prisma.UserWhereUniqueInput;
//     data: Prisma.UserUpdateInput;
//   }): Promise<User> {
//     const { where, data } = params;
//     return this.prisma.user.update({
//       data,
//       where,
//     });
//   }

//   async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
//     return this.prisma.user.delete({
//       where,
//     });
//   }

//   async findByEmail(email: string): Promise<User | null> {
//     return this.prisma.user.findUnique({ where: { email } }); // NEW
//   }
// }
