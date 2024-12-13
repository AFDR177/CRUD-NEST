import { ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { PrismaService } from 'src/prisma.service';
export declare class IsEmailUnique implements ValidatorConstraintInterface {
    private readonly prisma;
    constructor(prisma: PrismaService);
    validate(email: string): Promise<boolean>;
    defaultMessage(args: ValidationArguments): string;
}
