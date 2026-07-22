"use client";

import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import Input from "@/components/Input";
import React, { useState } from "react";

function page() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const handleSumbit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("密码不一致!");
      return;
    }

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json().catch(()=> null);

    console.log(res.status);
    console.log(data);
  };

  return (
    <div>
      <Navbar />
      <div className="flex w-full h-screen">
        <div className="flex-1 bg-[#d9d9d9]"></div>
        <div className="flex-1 flex justify-center items-center">
          <div className="w-[300px] h-auto flex">
            <form onSubmit={handleSumbit}>
              <Input
                placeholder="请输入您的用户名"
                className="mb-[16px]"
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
              />
              <Input
                placeholder="请输入您的密码"
                className="mb-[16px]"
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
              <Input
                placeholder="请确认您的密码"
                className="mb-[16px]"
                type="password"
                value={form.confirmPassword}
                onChange={(e) =>
                  setForm({ ...form, confirmPassword: e.target.value })
                }
              />
              <Input
                placeholder="请输入您的电子邮箱"
                className="mb-[16px]"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <Input
                placeholder="请输入您的电话号码"
                className="mb-[16px]"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
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
