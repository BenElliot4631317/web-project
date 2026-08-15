import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { username, email, password, phone } = body;

    if (!username || !email || !password || !phone) {
      return Response.json(
        {
          message: "请填写完整信息",
        },
        {
          status: 400,
        },
      );
    }

    if (
      typeof username !== "string" ||
      typeof email !== "string" ||
      typeof password !== "string" ||
      typeof phone !== "string"
    ) {
      return Response.json(
        {
          message: "数据格式错误",
        },
        {
          status: 400,
        },
      );
    }

    const cleanUsername = username.trim();
    const cleanEmail = email.trim().toLocaleLowerCase();
    const cleanPhone = phone.trim();

    if (cleanUsername.length < 3) {
      return Response.json(
        {
          message: "用户名至少3个字符",
        },
        {
          status: 400,
        },
      );
    }

    if (password.length < 6) {
      return Response.json(
        {
          message: "密码至少6个字符",
        },
        {
          status: 400,
        },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      return Response.json(
        {
          message: "邮箱格式不正确",
        },
        {
          status: 400,
        },
      );
    }

    const phoneRegex = /^1[3-9]\d{9}$/;
    if (!phoneRegex.test(cleanPhone)) {
      return Response.json(
        {
          message: "电话号码格式不正确",
        },
        {
          status: 400,
        },
      );
    }

    const existUser = await prisma.user.findUnique({
      where: {
        email: cleanEmail,
      },
    });

    if (existUser) {
      return Response.json(
        {
          message: "邮箱已经注册",
        },
        {
          status: 409,
        },
      );
    }

    const hashPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        username: cleanUsername,
        email: cleanEmail,
        phone: cleanPhone,
        password: hashPassword,
      },
    });

    return Response.json(
      {
        message: "注册成功",
        user: {
          id: user.id,
          email: user.email,
          username: user.username,
          phone: user.phone,
        },
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.error("Register Error", error);

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
