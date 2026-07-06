import Navbar from '@/components/Navbar'

export default function page() {
  return (
    <div>
      <Navbar />
      <div className="w-full h-[440px] bg-[#d9d9d9] flex col justify-center items-end">
        <div className='w-[16px] h-[16px] bg-white rounded-full mb-[18px]'></div>
        <div className='w-[16px] h-[16px] bg-white rounded-full ml-[12px] mb-[18px]'></div>  
        <div className='w-[16px] h-[16px] bg-white rounded-full ml-[12px] mb-[18px]'></div>
      </div>

      <div className="px-[24px] bg-white w-full h-[700px] flex items-center justify-center gap-[256px]">
        <div className='w-[400px] bg-[#F5F7FA] h-[600px] rounded-[8px] px-[46px]'></div>
        <div className='w-[400px] bg-[#F5F7FA] h-[600px] rounded-[8px] px-[46px]'></div>
        <div className='w-[400px] bg-[#F5F7FA] h-[600px] rounded-[8px] px-[46px]'></div>
      </div>

      <div>

        
      </div>
    </div>
  )
}
