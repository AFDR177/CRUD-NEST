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

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async signupUser(@Body() createUserDto: CreateUserDto): Promise<UserModel> {
    return this.userService.createUser(createUserDto);
  }

  // @Post()
  // async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
  //   //тут была ошибка вместо User было UserModel
  //   return this.userService.createUser(createUserDto);
  // }

  // @Post()
  // async signupUser(
  //   @Body() userData: { name?: string; email: string },
  // ): Promise<UserModel> {
  //   return this.userService.createUser(userData);
  // }

  @Get()
  async getAllUsers(): Promise<UserModel[]> {
    return this.userService.users({});
  }

  //   @Post()
  //   async signupUser(
  //     @Body() userData: { name?: string; email: string },
  //   ): Promise<UserModel> {
  //     return this.userService.createUser(userData);
  //   }
}
