import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <Navbar />

      <div className="flex row w-full h-screen">
        <div className="bg-[#d9d9d9] w-full h-full flex-1"></div>
        <div className="w-full h-full flex-1 flex justify-center items-center">
          <div className="w-[300px] h-auto">
            <form>
              <Input
                placeholder="请输入您的用户名"
                className="mt-[24px]"
              ></Input>
              <Input
                placeholder="请输入您的密码"
                className="mt-[24px]"
                type="password"
              ></Input>
              <div className="text-right mr-[8px] mt-[18px]">
                <Link href="/reset-password" className="hover:underline underline-offset-3">忘记密码</Link>
              </div>
              <div className="flex row justify-center gap-[48px] mt-[18px]">
                <div>
                  <Button>登录</Button>
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
