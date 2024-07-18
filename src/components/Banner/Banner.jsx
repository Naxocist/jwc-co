function Banner() {
  return (
    <div className="bg-[#F2F0F1] h-[663px] z-30 relative overflow-hidden">

      {/* Bg image */}
      <img className="w-[500px] absolute right-40 top-10" src="https://s3-alpha-sig.figma.com/img/b26f/ea69/ccfd8aa5825862cdb9604a4fb4930464?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZywyPvG~0-SNmCzufGtyEjRq~cROHBqXnFxTaqJ5XJ5KZQ3jOKVzMIjMQKDPjzM7OSwBjEAII2MT7tGwRIq3lWsfMIgOSWhkORXRa2-SkIRx0L7HcehBfq7JrfrBDJ8-d2h3EPjWQ8L-4-sU7OSvpMqQxKHvToncmesJLL7wl6ra80DgKqx~Wvut2Tlwd~SM8NWRvE~OrKpDFgaB6zvJlpRuCk1F18KWaSWXLQDQcmei7N7JzclBbIFIOgbIis0a81Oht8vp4aJ-~8DuNxeTXOuduGd5WnjGO4-E82EkM2OsWrxfuUFeHBcQDCXBsdaH11n4RG~d5xCvVr-Urofx-Q__"></img>

      {/* Stars */}
      <svg className="absolute top-[86px] right-[81px]" width="104" height="104" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z" fill="black" />
      </svg>
      
      <svg className="absolute bottom-[310px] right-[634px]" width="56" height="56" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z" fill="black" />
      </svg>

      <div className="h-full w-1/2 pl-[100px] pt-[103px]">

        <h1 className="font-[700] text-[64px] leading-[64px] mb-[32px]">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>

        <p className="text-[16px] leading-[22px] mb-[31px]">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>

        <div className="bg-black w-[210px] h-[52px] rounded-[62px] flex justify-center items-center hover:cursor-pointer mb-[48px]">
          <p className="font-[500] text-white">Shop Now</p>
        </div>


        <div className="flex w-fit ">
          <div className="mr-[32px]">
            <h2 className="font-[700] text-[40px]">200+</h2>
            <p className="text-[rgba(0,0,0,0.6)]">International Brands</p>
          </div>

          <div className="border-[rgba(0,0,0,0.1)] border-[1px] mr-[32px]"></div>

          <div className="mr-[32px]">
            <h2 className="font-[700] text-[40px]">2000+</h2>
            <p className="text-[rgba(0,0,0,0.6)]">High-Quality Products</p>
          </div>

          <div className="border-[rgba(0,0,0,0.1)] border-[1px] mr-[32px]"></div>
          <div className="mr-[32px]">
            <h2 className="font-[700] text-[40px]">30,000+</h2>
            <p className="text-[rgba(0,0,0,0.6)]">Happy Customers</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Banner