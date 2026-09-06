"use client";

import {useEffect, useState} from "react";

interface NotificationProps {
    message: string;
    type?: "success" | "error";
}

export default function Notification({
                                         message,
                                         type = "success",
                                     }: NotificationProps) {

    // shown 控制可见状态的 class（触发进/出场过渡），render 控制 DOM 是否存在
    const [shown, setShown] = useState(false);
    const [render, setRender] = useState(true);

    useEffect(() => {
        // 等浏览器完成首次渲染（隐藏态）后再切入可见态，从而触发过渡动画
        const enterTimer = setTimeout(() => setShown(true), 20);
        const leaveTimer = setTimeout(() => setShown(false), 3020);
        const removeTimer = setTimeout(() => setRender(false), 3320);

        return () => {
            clearTimeout(enterTimer);
            clearTimeout(leaveTimer);
            clearTimeout(removeTimer);
        };
    }, []);

    if (!render) {
        return null;
    }

    return (
        <div
            className={`fixed top-5 right-5 z-50 px-6 py-3 rounded-lg shadow-lg text-white transition-all duration-300 ease-out ${
                shown ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
            } ${type === "success" ? "bg-green-500" : "bg-red-500"}`}
        >
            {message}
        </div>
    );
}
