import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    signupUser(createUserDto: CreateUserDto): Promise<UserModel>;
    signinUser(body: {
        email: string;
        name: string;
    }): Promise<{
        message: string;
    }>;
    getAllUsers(): Promise<UserModel[]>;
}
