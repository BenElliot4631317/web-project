import Navbar from "@/components/Navbar";
import Button from "@/components/Button";

function page() {
  return (
    <div>
      <Navbar />

      <div className="flex w-full h-screen">
        <div className="flex-1 bg-[#d9d9d9]"></div>
        <div className="flex-1 flex flex-col justify-center items-center">
          <form className="w-full h-auto flex flex-col justify-center items-center">
            <input
              className="w-[600px] h-[50px] border border-gray-300 rounded-[8px] px-[24px]"
              placeholder="请输入你的邮箱来重置密码"
            ></input>
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
