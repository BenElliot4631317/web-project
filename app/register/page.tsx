import Navbar from "@/components/Navbar";
import Button from "@/components/Button"

function page() {
  return (
    <div>
      <Navbar />
      <div className="flex w-full h-screen">
        <div className="flex-1 bg-[#d9d9d9]"></div>
        <div className="flex-1 flex justify-center items-center">
          <div className="w-[300px] h-auto flex">
            <form>
              <input
                className="w-full h-[50px] border border-gray-300 rounded-[8px] px-[24px] mb-[16px]"
                placeholder="请输入你的用户名"
              ></input>
              <input
                className="w-full h-[50px] border border-gray-300 rounded-[8px] px-[24px] mb-[16px]"
                placeholder="请输入你的密码" type="password"
              ></input>
              <input
                className="w-full h-[50px] border border-gray-300 rounded-[8px] px-[24px] mb-[16px]"
                placeholder="请确认你的密码" type="password"
              ></input>
              <input
                className="w-full h-[50px] border border-gray-300 rounded-[8px] px-[24px] mb-[16px]"
                placeholder="请输入你的电子邮箱"
              ></input>
              <input
                className="w-full h-[50px] border border-gray-300 rounded-[8px] px-[24px] mb-[16px]"
                placeholder="请输入你的电话号码"
              ></input>
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
