import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import Input from "@/components/Input";

function page() {
  return (
    <div>
      <Navbar />
      <div className="flex w-full h-screen">
        <div className="flex-1 bg-[#d9d9d9]"></div>
        <div className="flex-1 flex justify-center items-center">
          <div className="w-[300px] h-auto flex">
            <form>
              <Input placeholder="请输入您的用户名" className="mb-[16px]" />
              <Input
                placeholder="请输入您的密码"
                className="mb-[16px]"
                type="password"
              />
              <Input
                placeholder="请确认您的密码"
                className="mb-[16px]"
                type="password"
              />
              <Input placeholder="请输入您的电子邮箱" className="mb-[16px]" />
              <Input placeholder="请输入您的电话号码" className="mb-[16px]" />
              <div className="flex justify-center mt-[18px]">
                <Button variant="secondary">注册账号</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
