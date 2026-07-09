import Navbar from "@/components/Navbar";

function page() {
  return (
    <div>
      <Navbar />
      
      <div className="w-full h-screen grid grid-cols-4 grid-rows-4 p-[24px] gap-[48px]">
        <div className="bg-[#d9d9d9] rounded-[8px] col-span-1 row-span-3"></div>
        <div className="bg-[#d9d9d9] rounded-[8px] col-span-3 row-span-4" ></div>
      </div>
    </div>
  );
}

export default page;
