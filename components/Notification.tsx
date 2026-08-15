"use client";

import { useEffect, useState } from "react";

interface NotificationProps {
  message: string;
  type?: "success" | "error";
}

export default function Notification({
  message,
  type = "success",
}: NotificationProps) {

  const [visible, setVisible] = useState(true);

  useEffect( () => {
    const timer = setTimeout( () => {
      setVisible(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      className={`fixed top-5 right-5 px-6 py-3 rounded-lg shadow-lg transition text-white ${type === "success" ? "bg-green-500" : "bg-red-500"}`}
    >
      {message}
    </div>
  );
}
