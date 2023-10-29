/// <reference types="multer" />
import { AuthService } from './auth.service';
import { UserSignInDto, UserSignUpDto } from './dto/auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signUp(body: UserSignUpDto, anh_dai_dien: Express.Multer.File): Promise<{
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
    sigin(body: UserSignInDto): Promise<{
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
