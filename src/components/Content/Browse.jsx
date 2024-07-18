function Browse() {
  return (
    <div className="mt-[80px] w-[1239px] h-[866px] bg-[#F0F0F0] rounded-[40px] pt-[68px] pb-[76px] px-[64px]">
      <h1 className="font-[700] text-[48px] text-center mb-[62px]">BROWSE BY DRESS STYLE</h1>

      <div className="flex flex-col gap-[20px]">
        <div className="flex w-full gap-[20px]  ">
          <div className="h-[289px] w-[407px] bg-green-300 rounded-[20px] relative">
            <h2 className="font-[700] text-[36px] absolute top-[27px] left-[36px]">Casual</h2>
          </div>
          <div className="bg-blue-200 grow rounded-[20px] relative">
            <h2 className="font-[700] text-[36px] absolute top-[27px] left-[36px]">Casual</h2>
          </div>
        </div>

        <div className="flex w-full gap-[20px] ">
          <div className="bg-blue-200 grow rounded-[20px] relative">
            <h2 className="font-[700] text-[36px] absolute top-[27px] left-[36px]">Party</h2>
          </div>
          <div className="h-[289px] w-[407px] bg-green-300 rounded-[20px] relative">
            <h2 className="font-[700] text-[36px] absolute top-[27px] left-[36px]">Gym</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Browse