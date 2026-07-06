import Navbar from "@/components/Navbar";

function page() {
  return (
    <div>
      <Navbar />

      <div className="flex flex-col w-full h-auto">
        <div className="text-right bg-white px-[24px] py-[12px]">查看更多</div>
        <div className="w-full h-[200px] bg-white flex items-center px-[24px] overflow-x-auto overflow-y-hidden gap-[24px]">
          <div className="w-[300px] h-[150px] shrink-0 bg-amber-200 rounded-lg"></div>
          <div className="w-[300px] h-[150px] shrink-0 bg-blue-200 rounded-lg"></div>
          <div className="w-[300px] h-[150px] shrink-0 bg-green-200 rounded-lg"></div>
          <div className="w-[300px] h-[150px] shrink-0 bg-pink-200 rounded-lg"></div>
          <div className="w-[300px] h-[150px] shrink-0 bg-red-200 rounded-lg"></div>
          <div className="w-[300px] h-[150px] shrink-0 bg-amber-200 rounded-lg"></div>
          <div className="w-[300px] h-[150px] shrink-0 bg-blue-200 rounded-lg"></div>
          <div className="w-[300px] h-[150px] shrink-0 bg-green-200 rounded-lg"></div>
          <div className="w-[300px] h-[150px] shrink-0 bg-pink-200 rounded-lg"></div>
          <div className="w-[300px] h-[150px] shrink-0 bg-red-200 rounded-lg"></div>
          <div className="w-[300px] h-[150px] shrink-0 bg-amber-200 rounded-lg"></div>
          <div className="w-[300px] h-[150px] shrink-0 bg-blue-200 rounded-lg"></div>
          <div className="w-[300px] h-[150px] shrink-0 bg-green-200 rounded-lg"></div>
          <div className="w-[300px] h-[150px] shrink-0 bg-pink-200 rounded-lg"></div>
          <div className="w-[300px] h-[150px] shrink-0 bg-red-200 rounded-lg"></div>
        </div>
        <div className="w-full h-[1200px] bg-white grid grid-cols-9 grid-rows-9 px-[24px] py-[24px] gap-[76px]">
          <div className="bg-gray-300 rounded-[8px] col-span-4 row-span-4"></div>
          <div className="bg-gray-300 rounded-[8px] col-span-4 row-span-4"></div>
          <div className="bg-gray-300 rounded-[8px] col-start-9 col-span-1 row-span-5"></div>
          <div className="bg-gray-300 rounded-[8px] col-span-4 row-span-4"></div>
          <div className="bg-gray-300 rounded-[8px] col-span-4 row-span-4"></div>
        </div>
      </div>
    </div>
  );
}

export default page;
