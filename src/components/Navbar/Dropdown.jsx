function Dropdown({isDropdown, setIsDropdown}) {
  return (
    <div className="duration-500" style={{height: isDropdown ? "250px" : "0px"}} onMouseLeave={() => {setIsDropdown(false)}}>
      <div className="flex gap-[80px] mb-[54px] ml-[100px]">

        <div>
          <h1 className="font-[800] text-[16px] mb-[20px]">Shop branch</h1>
          <div className="flex gap-[79px]">
            <div className="w-[101px] h-[191px] flex flex-col gap-[20px]">
              <p className="font-[400] text-[16px]">Bangkok</p>
              <p className="font-[400] text-[16px]">Tokyo</p>
              <p className="font-[400] text-[16px]">New York</p>
              <p className="font-[400] text-[16px]">London</p>
            </div>

            <div className="w-[101px] h-[191px] flex flex-col gap-[20px]">
              <p className="font-[400] text-[16px]">Bangkok</p>
              <p className="font-[400] text-[16px]">Tokyo</p>
              <p className="font-[400] text-[16px]">New York</p>
              <p className="font-[400] text-[16px]">London</p>
            </div>

            <div className="w-[101px] h-[191px] flex flex-col gap-[20px]">
              <p className="font-[400] text-[16px]">Bangkok</p>
              <p className="font-[400] text-[16px]">Tokyo</p>
              <p className="font-[400] text-[16px]">New York</p>
              <p className="font-[400] text-[16px]">London</p>
            </div>

          </div>
        </div>

        {/* Images */}
        <div className="flex gap-[40px]">
          <div className="w-[295px] h-[191px] overflow-hidden rounded-[20px] relative">
            <p className="font-[800] text-[16px] text-white z-10 absolute bottom-[23px] left-[25px]">Bangkok</p>
            <img className="scale-[2] object-cover absolute top-[35px]" src="/src/assets/Bangkok.jpg"></img>
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,.3)] to-transparent"></div>
          </div>

          <div className="w-[295px] h-[191px] overflow-hidden rounded-[20px] relative">
            <p className="font-[800] text-[16px] text-white z-10 absolute bottom-[23px] left-[25px]">Tokyo</p>
            <img className="scale-[2] object-cover absolute top-[35px] right-[10px]" src="/src/assets/Tokyo.webp"></img>
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,.3)] to-transparent"></div>
          </div>

          <div className="w-[295px] h-[191px] overflow-hidden rounded-[20px] relative">
            <p className="font-[800] text-[16px] text-white z-10 absolute bottom-[23px] left-[25px]">New York</p>
            <img className="scale-[2] object-cover absolute -top-[25px] right-[10px]" src="/src/assets/New York.jpg"></img>
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,.3)] to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown

