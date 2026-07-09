import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import Input from "@/components/Input";

function page() {
  return (
    <div>
      <Navbar />

      <div className="flex w-full h-screen">
        <div className="flex-1 bg-[#d9d9d9]"></div>
        <div className="flex-1 flex flex-col justify-center items-center">
          <form className="w-[600px] h-auto flex flex-col justify-center items-center">
            <Input placeholder="请输入您的邮箱来重置密码" />
            <div className="flex justify-center mt-[24px]">
              <Button variant="secondary">重置密码</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default page;
