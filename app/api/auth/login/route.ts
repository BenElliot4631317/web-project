import {type} from "node:os";
import {prisma} from "@/lib/prisma";
import bcrypt from "bcrypt";


export async function POST(request: Request) {
    try{
        const body = await request.json();

        const {username, password} = body;

        if (!username || !password) {
            return Response.json(
                {
                    message: "请输入用户名和密码",
                },
                {
                    status: 400,
                }
            );
        }

        if (
            typeof username !== "string" ||
            typeof password !== "string"
        ) {
            return Response.json(
                {
                    message: "数据格式错误",
                },
                {
                    status: 400
                }
            );
        }

        const cleanUsername = username.trim();

        const user = await prisma.user.findFirst({
            where: {
                OR: [
                    {
                        username: cleanUsername,
                    },
                    {
                        email: cleanUsername
                    }
                ]
            }
        });

        if (!user) {
            return Response.json(
                {
                    message: "用户不存在",
                },
                {
                    status: 404
                }
            );
        }

        const passwordMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!passwordMatch) {
            return Response.json(
                {
                    message: "密码错误"
                },
                {
                    status: 401
                }
            );
        }

        return Response.json(
            {
                message: "登录成功",
                user: {
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    phone: user.phone,
                    role: user.role
                }
            },
            {
                status: 200
            }
        )
    } catch (error) {
        console.error("Login Error:", error);
        return Response.json(
            {
                message: "服务器错误"
            },
            {
                status: 500
            }
        )
    }
}