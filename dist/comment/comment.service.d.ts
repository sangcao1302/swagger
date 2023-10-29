import { Prisma, PrismaClient } from '@prisma/client';
import { commenType } from './entities/comment.entity';
import { UpdateComment } from './dto/comment.dto';
export declare class CommentService {
    model: PrismaClient<Prisma.PrismaClientOptions, never, import("@prisma/client/runtime/library").DefaultArgs>;
    getComment(): Promise<{
        statusCode: string;
        message: string;
        content: {
            binh_luan_id: number;
            nguoi_dung_id: number;
            phong_id: number;
            ngay_binh_luan: Date;
            noi_dung: string;
            sao_binh_luan: number;
        }[];
    }>;
    postComment(body: commenType, userId: number): Promise<any>;
    updateComment(body: UpdateComment, id: number): Promise<{
        statusCode: number;
        message: string;
        data: {
            binh_luan_id: number;
            nguoi_dung_id: number;
            phong_id: number;
            ngay_binh_luan: Date;
            noi_dung: string;
            sao_binh_luan: number;
        };
    }>;
    deleteComment(id: number): Promise<{
        statusCode: number;
        message: string;
        data: {
            binh_luan_id: number;
            nguoi_dung_id: number;
            phong_id: number;
            ngay_binh_luan: Date;
            noi_dung: string;
            sao_binh_luan: number;
        };
    }>;
}
