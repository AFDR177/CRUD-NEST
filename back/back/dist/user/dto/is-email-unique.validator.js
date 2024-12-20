"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsEmailUnique = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const prisma_service_1 = require("../../prisma.service");
let IsEmailUnique = class IsEmailUnique {
    constructor(prisma) {
        this.prisma = prisma;
        console.log('PrismaService===>', !!prisma);
    }
    async validate(email) {
        console.log('===>Validating email uniqueness:', email);
        if (!this.prisma) {
            console.error('====>PrismaService DI is not working!');
            return false;
        }
        const user = await this.prisma.user.findUnique({ where: { email } });
        console.log('====>Validation result:', user ? 'Not unique' : 'Unique');
        return !user;
    }
    defaultMessage(args) {
        return `Email: "${args.value}" уже существуюет, введите другой`;
    }
};
exports.IsEmailUnique = IsEmailUnique;
exports.IsEmailUnique = IsEmailUnique = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: true }),
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], IsEmailUnique);
//# sourceMappingURL=is-email-unique.validator.js.map