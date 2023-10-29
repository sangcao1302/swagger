import { SignInType, SignUpType } from './entities/auth.entity';
import { PrismaClient } from '@prisma/client';
export declare class AuthService {
    model: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import("@prisma/client/runtime/library").DefaultArgs>;
    signup(body: SignUpType, img: any): Promise<{
        statusCode: number;
        message: string;
        content: {
            id: number;
            hoten: string;
            email: string;
            matkhau: string;
            tuoi: string;
            ngaysinh: string;
            gender: string;
            avatar: string;
        };
    }[]>;
    sigin(body: SignInType): Promise<{
        statusCode: string;
        message: string;
        content: {
            email: string;
            name: string;
            phone: string;
            birthday: string;
            gender: string;
        };
    }>;
}
