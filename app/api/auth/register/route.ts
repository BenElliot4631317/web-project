import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { username, email, password, phone } = body;

    const existUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existUser) {
      return Response.json(
        {
          message: "邮箱已经注册",
        },
        {
          status: 400,
        },
      );
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        username,
        email,
        phone,
        password: hashPassword,
      },
    });

    return Response.json({
      message: "注册成功",
      user: {
        id: user.id,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        message: "服务器错误",
      },
      {
        status: 500,
      },
    );
  }
}
