import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import Input from "@/components/Input";

export default function page() {
  return (
    <div>
      <Navbar />

      <div className="flex row bg-amber-300 w-full h-screen">
        <div className="bg-[#d9d9d9] w-full h-full flex-1"></div>
        <div className="bg-white w-full h-full flex-1 flex justify-center items-center">
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
              <div className="text-right mr-[8px] mt-[18px]">忘记密码</div>
              <div className="flex row justify-center gap-[48px] mt-[18px]">
                <div>
                  <Button>登录</Button>
                </div>
                <div>
                  <Button variant="secondary">注册</Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
