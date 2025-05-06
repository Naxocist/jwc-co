function Browse() {
  return (
    <div className="w-fit m-auto">
      <div className="mt-[80px] w-[1239px] h-[866px] bg-[#F0F0F0] rounded-[40px] pt-[68px] pb-[76px] px-[64px]">
        <h1 className="font-[700] text-[48px] text-center mb-[62px]">BROWSE BY DRESS STYLE</h1>

        <div className="flex flex-col gap-[20px]">
          <div className="flex w-full gap-[20px]  ">

            <div className="h-[289px] w-[407px] bg-green-300 rounded-[20px] relative overflow-hidden">
              <h2 className="font-[700] text-[36px] absolute top-[27px] left-[36px] z-10">Casual</h2>
              <div className="absolute w-[200px] top-[25px] right-[40px]">
                <img className="w-full h-full object-cover" src="/src/assets/casual.png"></img>
              </div>
            </div>

            <div className="bg-blue-200 grow rounded-[20px] relative overflow-hidden">
              <h2 className="font-[700] text-[36px] absolute top-[27px] left-[36px] z-10">Formal</h2>
              <div className="w-full h-full absolute top-[-140px]">
                <img className="object-cover scale-75" src="/src/assets/formal.png"></img>
              </div>
            </div>

          </div>

          <div className="flex w-full gap-[20px] ">

            <div className="bg-white grow rounded-[20px] relative overflow-hidden">
              <h2 className="font-[700] text-[36px] absolute top-[27px] left-[36px] z-10">Party</h2>
              <div className="w-full h-full absolute bottom-[85px] left-[100px] scale-[45%]">
                <img className="object-cover" src="/src/assets/party.webp"></img>
              </div>
            </div>

            <div className="h-[289px] w-[407px] bg-white rounded-[20px] relative overflow-hidden">
              <h2 className="font-[700] text-[36px] absolute top-[27px] left-[36px] z-10">Gym</h2>
              <div className="absolute -bottom-[160px] left-[60px]">
                <img className="w-full h-full object-cover scale-[1.5]" src="/src/assets/gym.webp"></img>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Browse