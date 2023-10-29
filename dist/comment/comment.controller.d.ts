import { CommentService } from './comment.service';
import { commentDTO, UpdateComment } from './dto/comment.dto';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
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
    postComment(body: commentDTO, userId: number): Promise<any>;
    updateComment(body: UpdateComment, binhLuanId: number): Promise<{
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
