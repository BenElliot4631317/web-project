"use client";

import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Notification from "@/components/Notification";
import React, {useState} from "react";

function page() {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        role: "user", // 默认角色为用户
    });

    // 表单验证状态
    const [errors, setErrors] = useState<{
        username?: string;
        email?: string;
        password?: string;
        confirmPassword?: string;
        phone?: string;
    }>({});

    const [notice, setNotice] = useState<{
        message: string;
        type: "success" | "error";
    } | null>(null);

    const [notificationKey, setNotificationKey] = useState(0);

    const showNotification = (
        message: string,
        type: "success" | "error"
    )=> {
        setNotice({
            message,
            type,
        });

        setNotificationKey((prev)=> prev+1);
    }

    // 验证表单字段
    //为什么要在前端放一个表单验证提示的功能？为什么不放在api里通过后端来实现提示的功能呢？
    //比如用户输入:ab;如果要通过后端验证，要通过浏览器/服务器/数据库/返回错误，只是为了告诉用户一个字符数问题，这太没必要且让系统变得复杂。
    const validateField = (name: string, value: string): string | undefined => {
        switch (name) {
            case "username":
                if (!value.trim()) return "用户名不能为空";
                if (value.length < 3) return "用户名至少3个字符";
                return undefined;
            case "email":
                if (!value.trim()) return "邮箱不能为空";
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) return "邮箱格式不正确";
                return undefined;
            case "password":
                if (!value) return "密码不能为空";
                if (value.length < 6) return "密码至少6个字符";
                return undefined;
            case "confirmPassword":
                if (!value) return "请确认密码";
                return undefined;
            case "phone":
                if (!value.trim()) return "电话号码不能为空";
                const phoneRegex = /^1[3-9]\d{9}$/;
                if (!phoneRegex.test(value)) return "电话号码格式不正确";
                return undefined;
            default:
                return undefined;
        }
    };

    // 处理输入变化
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm((prev) => ({...prev, [name]: value}));

        // 实时验证
        const error = validateField(name, value);
        setErrors((prev) => ({...prev, [name]: error}));

    };

    const handleSumbit = async (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors = {
            username: validateField("username", form.username),
            email: validateField("email", form.email),
            password: validateField("password", form.password),
            confirmPassword: validateField("confirmPassword", form.confirmPassword),
            phone: validateField("phone", form.phone),
        };

        setErrors(newErrors);

        const hasError = Object.values(newErrors).some(Boolean);
        if (hasError) {
            return;
        }

        const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        });

        const data = await res.json().catch(() => null);

        if (res.ok) {
            showNotification(data?.message || "注册成功!", "success");
        } else {
            showNotification(data?.message || "注册失败!", "error");
        }
    };

    return (
        <div>
            <div>{notice && <Notification key={notificationKey} message={notice.message} type={notice.type}/>}</div>
            <Navbar/>
            <div className="flex w-full h-screen">
                <div className="flex-1 bg-[#d9d9d9]"></div>
                <div className="flex-1 flex justify-center items-center">
                    <div className="w-full justify-center items-center h-auto flex">
                        <form onSubmit={handleSumbit} className="w-[300px]">
                            <Input
                                placeholder="请输入您的用户名"
                                className="mb-[16px]"
                                value={form.username}
                                error={errors.username}
                                name="username"
                                onChange={handleChange}
                            />
                            <Input
                                placeholder="请输入您的密码"
                                className="mb-[16px]"
                                type="password"
                                value={form.password}
                                error={errors.password}
                                name="password"
                                onChange={handleChange}
                            />
                            <Input
                                placeholder="请确认您的密码"
                                className="mb-[16px]"
                                type="password"
                                value={form.confirmPassword}
                                error={errors.confirmPassword}
                                name="confirmPassword"
                                onChange={handleChange}
                            />
                            <Input
                                placeholder="请输入您的电子邮箱"
                                className="mb-[16px]"
                                value={form.email}
                                error={errors.email}
                                name="email"
                                onChange={handleChange}
                            />
                            <Input
                                placeholder="请输入您的电话号码"
                                className="mb-[16px]"
                                value={form.phone}
                                error={errors.phone}
                                name="phone"
                                onChange={handleChange}
                            />
                            <div className="flex justify-center mt-[18px]">
                                <Button
                                    variant="secondary"
                                    type="submit"
                                    onClick={() => {
                                        console.log("clicked");
                                    }}
                                >
                                    注册账号
                                </Button>

                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default page;
