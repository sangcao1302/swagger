"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let CommentService = class CommentService {
    constructor() {
        this.model = new client_1.PrismaClient();
    }
    async getComment() {
        let getAllComment = await this.model.binh_luan.findMany();
        if (getAllComment.length !== 0) {
            return {
                statusCode: "200",
                message: "Thành công",
                content: getAllComment
            };
        }
    }
    async postComment(body, userId) {
        let { nguoi_dung_id, phong_id, ngay_binh_luan, noi_dung, sao_binh_luan } = body;
        try {
            let user = await this.model.binh_luan.findFirst({
                where: {
                    nguoi_dung_id
                }
            });
            if (user) {
                return {
                    statusCode: "200",
                    message: "Thành công",
                    data: await this.model.binh_luan.create({
                        data: {
                            nguoi_dung_id: Number(nguoi_dung_id),
                            phong_id: Number(phong_id),
                            ngay_binh_luan,
                            noi_dung,
                            sao_binh_luan
                        }
                    })
                };
            }
            else {
                throw new common_1.BadRequestException({ statusCode: 400, message: "Token sai", content: 'null', dateTime: new Date() });
            }
        }
        catch (exp) {
            return exp.response;
        }
    }
    async updateComment(body, id) {
        let { binh_luan_id, nguoi_dung_id, phong_id, ngay_binh_luan, noi_dung, sao_binh_luan } = body;
        return {
            statusCode: 200,
            message: "Cập nhật thành công",
            data: await this.model.binh_luan.update({
                where: {
                    binh_luan_id: Number(binh_luan_id)
                },
                data: {
                    nguoi_dung_id, phong_id, ngay_binh_luan,
                    noi_dung,
                    sao_binh_luan
                }
            })
        };
    }
    async deleteComment(id) {
        let findId = await this.model.binh_luan.delete({
            where: {
                binh_luan_id: Number(id)
            }
        });
        if (findId) {
            return {
                statusCode: 200,
                message: "Thanh Cong",
                data: findId
            };
        }
    }
};
exports.CommentService = CommentService;
exports.CommentService = CommentService = __decorate([
    (0, common_1.Injectable)()
], CommentService);
//# sourceMappingURL=comment.service.js.map