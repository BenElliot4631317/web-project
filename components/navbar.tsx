

import Button from "@/components/Button";
import Input from "@/components/Input";
import {Search} from "lucide-react";
import Link from "next/link";


function navbar() {

  return (
    <div className="flex w-full h-auto px-[24px] py-[18px] bg-white shadow justify-between">
      <div className="flex flex-row">
        <div className="bg-gray-500 w-[50px] h-[50px]"></div>
        <div className="ml-[32px] text-[32px] font-bold">
          高校实习信息管理平台
        </div>
      </div>
      <div className="flex items-center w-[400px] h-[50px]">
        <Input type="search" placeholder="搜索..." className="bg-[#F2F2F7]" bordered={false} leftIcon={<Search size={20} className="text-black"/>} />
      </div>
      <div className="flex">
        <div className="mr-[42px]">
          <Link href="/login">
            <Button variant="secondary">登录</Button>
          </Link>

        </div>
        <Link href="/register">
          <Button variant="primary">注册</Button>
        </Link>
      </div>
    </div>
  );
}

export default navbar;
