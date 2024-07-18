function Item({title, pic, price, discount, stars, percent}) {

  const isFloat = Number(stars) === stars  && stars % 1 !== 0 

  const svg_stars = Array.from({ length: stars }).map((_, index) => (
    <svg key={index} width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.04682 0L11.666 5.63991L17.8393 6.38809L13.2848 10.6219L14.4809 16.7243L9.04682 13.701L3.61278 16.7243L4.80885 10.6219L0.254359 6.38809L6.42761 5.63991L9.04682 0Z" fill="#FFC633" />
    </svg>
  ));

  return (
    <div>
      <div className="w-[295px] h-[298px] bg-[#F0EEED] rounded-[20px] overflow-hidden relative">
        <img className="absolute top-[-70px] scale-[90%]" src={pic}></img>
      </div>

      <p className="font-[700] text-[20px]">{title}</p>

      <div className="flex items-center">
        {svg_stars}

        {
          isFloat && (
            <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.76406 16.7243L9.1981 13.701V0L6.57889 5.63991L0.40564 6.38809L4.96013 10.6219L3.76406 16.7243Z" fill="#FFC633"/>
            </svg>
          )
        }


        <div className="ml-[13px]">
          {stars}{!isFloat && ".0"}/<span className="text-[rgba(0,0,0,.6)]">5</span>
        </div>

      </div>

      <div className="flex gap-[10px] items-center">
        <p className="font-[700] text-[24px]">${price}</p>

        {
          (discount ? 
            <>
              <p className="font-[700] text-[24px] text-[rgba(0,0,0,0.4)]"> <s>${discount}</s></p>
              <div className="bg-[rgba(255,51,51,0.1)] w-[58px] h-[27px] rounded-[62px] flex justify-center items-center">
                <p className="font-[500] text-[12px] text-[#FF3333]"> {percent}% </p>
              </div>
            </>
            :
            <></>
          )
        }
      </div>
    </div>
  )
}

export default Item