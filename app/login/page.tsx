"use client"

import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";
import Notification from "@/components/Notification";
import {useState} from "react";

export default function page() {

    const [form, setForm] = useState({
        username: "",
        password: ""
    })

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
        setNotificationKey((prev)=> prev + 1);
    }

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement>
    ) {
        const {name, value} = e.target;

        setForm(prev => ({
            ...prev,
            [name]: value,
        }));
    }

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();

        try {
            const res = await fetch(
                "/api/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(form)
                }
            );
            const data = await res.json();

            if(res.ok) {
                showNotification(data?.message || "登陆成功", "success");
            } else {
                showNotification(data?.message || "登陆失败", "error");
            }

            console.log(data);
        } catch (error) {
            console.error("login error:", error);
        }
    }

    return (
        <div>
            <div>{notice && <Notification key={notificationKey} message={notice.message} type={notice.type}/>}</div>
            <Navbar/>
            <div className="flex row w-full h-screen">
                <div className="bg-[#d9d9d9] w-full h-full flex-1"></div>
                <div className="w-full h-full flex-1 flex justify-center items-center">
                    <div className="w-[300px] h-auto">
                        <form onSubmit={handleLogin}>
                            <Input
                                placeholder="请输入您的用户名或邮箱"
                                name="username"
                                className="mt-[24px]"
                                value={form.username}
                                onChange={handleChange}
                            ></Input>
                            <Input
                                placeholder="请输入您的密码"
                                name="password"
                                className="mt-[24px]"
                                type="password"
                                value={form.password}
                                onChange={handleChange}
                            ></Input>
                            <div className="text-right mr-[8px] mt-[18px]">
                                <Link href="/reset-password"
                                      className="hover:underline underline-offset-3">忘记密码</Link>
                            </div>
                            <div className="flex row justify-center gap-[48px] mt-[18px]">
                                <div>
                                    <Button type={"submit"}>登录</Button>
                                </div>
                                <Link href="/register">
                                    <Button variant="secondary">注册</Button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
