import React from "react";
import Button from "@/components/Button"

function navbar() {
  return (
    <div className="flex w-full h-auto px-[24px] py-[18px] bg-white shadow-md justify-between">
      <div className="flex row">
        <div className="bg-gray-500 w-[50px] h-[50px]"></div>
        <div className="ml-[32px] text-[32px] font-bold">
          高校实习信息管理平台
        </div>
      </div>
      <div className="flex row">
        <div className="mr-[42px]">
          <Button variant="secondary">登录</Button>
        </div>
        <div>
          <Button variant="primary">注册</Button>
        </div>

      </div>
    </div>
  );
}

export default navbar;
