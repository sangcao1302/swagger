"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor() {
        this.model = new client_1.PrismaClient();
    }
    async signup(body, img) {
        let { name, email, password, phone, birthday, gender, anh_dai_dien } = body;
        let checkEmail = await this.model.nguoi_dung.findFirst({
            where: {
                email
            }
        });
        if (checkEmail) {
            throw new common_1.BadRequestException({ status: 400, message: "Yêu cầu không hợp lệ!", content: 'Email đã tồn tại', dateTime: new Date() });
        }
        else {
            const createUser = await this.model.nguoi_dung.create({
                data: {
                    name,
                    email,
                    password,
                    phone,
                    birthday,
                    gender,
                    anh_dai_dien: "localhost:8080/public/image/avatar/" + img,
                }
            });
            return [{
                    "statusCode": 200,
                    "message": "Đăng nhập thành công",
                    "content": {
                        "id": (await createUser).nguoi_dung_id,
                        "hoten": (await createUser).name,
                        "email": (await createUser).email,
                        "matkhau": (await createUser).password,
                        "tuoi": (await createUser).phone,
                        "ngaysinh": (await createUser).birthday,
                        "gender": (await createUser).gender,
                        "avatar": (await createUser).anh_dai_dien
                    }
                }];
        }
    }
    async sigin(body) {
        let { email, password } = body;
        let checkEmail = await this.model.nguoi_dung.findFirst({
            where: {
                email
            }
        });
        if (checkEmail !== null) {
            const saltOrRounds = 10;
            const mat_khau = checkEmail.password;
            const hash = await bcrypt.hash(mat_khau, saltOrRounds);
            let checkPass = await bcrypt.compare(password, hash);
            if (checkPass) {
                return {
                    statusCode: "200",
                    message: "Thành công",
                    content: {
                        email: checkEmail.email,
                        name: checkEmail.name,
                        phone: checkEmail.phone,
                        birthday: checkEmail.birthday,
                        gender: checkEmail.gender
                    }
                };
            }
            else {
                throw new common_1.BadRequestException({ status: 400, message: "Yêu cầu không hợp lệ!", content: 'Sai mật khẩu hoặc tên đăng nhập', dateTime: new Date() });
            }
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)()
], AuthService);
//# sourceMappingURL=auth.service.js.map