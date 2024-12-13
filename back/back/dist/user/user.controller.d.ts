import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    signupUser(createUserDto: CreateUserDto): Promise<UserModel>;
    getAllUsers(): Promise<UserModel[]>;
}
