function Dropdown({setIsDropdown}) {
  return (
    <div className="pb-[54px] pl-[100px]" onMouseLeave={() => {setIsDropdown(false)}}>
      <div className="flex gap-[80px]">

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
            <img className="scale-[2] object-cover absolute top-[35px]" src="https://s3-alpha-sig.figma.com/img/8dc0/2ebd/ad34d7476ab6e10819a53d24dedc0a1a?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RLL5apuSngBR4s9wSirpEucXXte6QAN~4PI2ofGKjz3KEQeZjpqO-4AvQ9xc1r-9T7NpMyO09nTC7k2tu9XfSXIO28ZwrRlAGV-aHSoZcWc4X4EVHPH6Nl1Jv81BiVRtGLd-T9nhrSpAnipm2rovqlr3JnzkZRrFrx6LrbdxJoVclHIwpAK5cjtYDyj6MNYdJDMGuiBWiIlxmoJhr2Wshf0BfWjCfEnp8zZfE7fcN4owfinAvrQDquaqelgoXCmB4M1WB~nRftGQkPuwitvVdtTWJrf1tujk7lLdru5vyj4HuPEPYSQqru6rZdatLKSTOhnpU3HlCJn3jvUNYT8vYQ__"></img>
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,.3)] to-transparent"></div>
          </div>

          <div className="w-[295px] h-[191px] overflow-hidden rounded-[20px] relative">
            <p className="font-[800] text-[16px] text-white z-10 absolute bottom-[23px] left-[25px]">Tokyo</p>
            <img className="scale-[2] object-cover absolute top-[35px] right-[10px]" src="https://s3-alpha-sig.figma.com/img/77e9/38cd/250726b3cf7ef8f8a8e2b1caf05c3c25?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xd4N4ZtGrUSnRydxZ5JSS82i4C2Ngf1oGw36nhs~vI54oERQt0N4Wa0dBGXDHA~Bb~Og-TH5w9q06tEP8Mes--wStYF4x7HNYElBSm9yuTh-JZha8qT6R19-h-S7jWWBaQCTUaKu3EPU6F5~VMCLcjZT1LkWaVdNfe00v-3xn4aeWmIa8TmsOTTBNYTyVmYbCFYUGLRa-Jl8m7o~kILLq-KvomnD-LhVJmLkogxMEMAd4mtQHTdp-7zkMIPQ2xXkR56XOkcusVfDyjeY9lwVlJ-oyC46X2p0LtEYIO5h~ns3mS6oqsTOQCG5yR~gftpWBhPd6Pf0M7WjSyfbETGqAg__"></img>
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,.3)] to-transparent"></div>
          </div>

          <div className="w-[295px] h-[191px] overflow-hidden rounded-[20px] relative">
            <p className="font-[800] text-[16px] text-white z-10 absolute bottom-[23px] left-[25px]">New York</p>
            <img className="scale-[2] object-cover absolute -top-[25px] right-[10px]" src="https://s3-alpha-sig.figma.com/img/f8d8/cf0d/62fb9aabc0cdb8b53f77e0db86288d63?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IS-g4-SEk5Yk3NJLDy9nF42OCs2M2yFXBGVTvubD~TS~I7t4SmtD3XK7ila6zpSpl8o5hZrXlofPc210O3RAKfva8wneBLStruOqUvTu6Fl8TowyRF0A0GyNVOuY~pRbayOfP8WybtCOA8in6abH~Gxka6B8vmCvMwFZUCDL14TzjakKn1NPXlQkhbOr-FXLJX-OoJncZ33y~UBBcGQhgxwpq~DVldALF33HKhBgeYpEwXvbSlwv8gQJrFaGHekSkn764ASB6j1rE2ioQBPrreXdZNhRNNb1OfvcTgLAKH0wU2huWIdknqlMJyxvsKvjQQIJDCOFnPTJ0YVutFW~OQ__"></img>
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,.3)] to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown

