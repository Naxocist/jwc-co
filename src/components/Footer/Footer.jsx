function Footer() {
  return (
    <div className="mt-[80px] relative">
      <div className="bg-black w-[1240px] h-[177px] rounded-[20px] flex justify-between items-center px-[64px] m-auto">
        <div className="w-[551px] h-[94px]">
          <h1 className="font-[700] text-[40px] text-white leading-[45px]">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
        </div>
        <div className="w-[349px] h-[105px] flex flex-col gap-[14px]">
          <div className="bg-[#F0F0F0] w-[349px] h-[48px] rounded-[62px]">
            <div className="flex items-center h-full pl-[16px] gap-[10px]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 4.125H3C2.70163 4.125 2.41548 4.24353 2.2045 4.4545C1.99353 4.66548 1.875 4.95163 1.875 5.25V18C1.875 18.4973 2.07254 18.9742 2.42417 19.3258C2.77581 19.6775 3.25272 19.875 3.75 19.875H20.25C20.7473 19.875 21.2242 19.6775 21.5758 19.3258C21.9275 18.9742 22.125 18.4973 22.125 18V5.25C22.125 4.95163 22.0065 4.66548 21.7955 4.4545C21.5845 4.24353 21.2984 4.125 21 4.125ZM12 11.9738L5.89219 6.375H18.1078L12 11.9738ZM8.69906 12L4.125 16.1925V7.8075L8.69906 12ZM10.3641 13.5262L11.2397 14.3297C11.4472 14.52 11.7185 14.6255 12 14.6255C12.2815 14.6255 12.5528 14.52 12.7603 14.3297L13.6359 13.5262L18.1078 17.625H5.89219L10.3641 13.5262ZM15.3009 12L19.875 7.8075V16.1925L15.3009 12Z" fill="black" fill-opacity="0.4" />
              </svg>

              <input style={{all:'unset'}} placeholder="Enter your email address"></input>
            </div>
          </div>

          <button className="bg-[#F0F0F0] w-[349px] h-[48px] rounded-[62px] flex items-center justify-center">
            <p className="font-[500] text-[16px]">Subscribe to Newsletter</p>
          </button>
        </div>
      </div>

      <div className="bg-[#F0F0F0] w-full h-[499px] absolute top-[90px] z-[-1]">
      </div>
    </div>
  )
}

export default Footer