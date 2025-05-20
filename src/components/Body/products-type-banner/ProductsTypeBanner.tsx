import Laptops from "../../../assets/photos/laptops.svg";
import AirConditioner from "../../../assets/photos/airconditioner.svg";
import WashingMachine from "../../../assets/photos/washing-machine.svg";
import TV from "../../../assets/photos/tv.svg";
import Fridge from "../../../assets/photos/fridge.svg";
import Fridge2 from "../../../assets/photos/fridge-1.svg";
import Phone from "../../../assets/photos/phone.svg";

function ProductsTypeBanner() {
  return (
    <div className="mb-[93px] desktop:mb-[105px]">
      <div className="container">
        <div className="flex flex-col desktop:flex-row items-center desktop:gap-[12px] justify-center gap-[6px]">
          <div className="flex flex-col items-center justify-center gap-[5px] desktop:gap-[10px]">
            <div className="flex items-center justify-center gap-[5px] desktop:gap-[10px]">
              <button className="desktop:w-[444px] desktop:h-[248px] w-[230px] h-[130px] bg-[#5C4F8C] desktop:rounded-[7px] rounded-[3px] overflow-hidden relative flex justify-end">
                <p className="font-Poppins text-[12px] desktop:text-[14px] font-[400] text-[#FFFFFF] absolute left-[10px] desktop:top-[14px] top-[6px] desktop:w-[118px] desktop:h-[29px] w-[88px] h-[24px] flex justify-center items-center border-[1px] border-[#FFFFFF] border-solid desktop:rounded-[30px] rounded-[16px]">
                  Noutbuklar
                </p>
                <img
                  className="desktop:mr-[15px] desktop:mt-[11px] mr-[10.03px] mt-[5.77px]"
                  src={Laptops}
                  alt="Laptops"
                />
              </button>
              <button className="desktop:w-[214px] desktop:h-[248px] w-[120px] h-[130px] bg-[#797C7D] rounded-[3px] desktop:rounded-[7px] relative overflow-hidden">
                <p className="absolute desktop:top-[12px] top-[7px] desktop:left-[12px] left-[6px] font-Poppins font-[400] desktop:text-[10px] text-[10px] text-[#FFFFFF] border-[1px] border-solid border-[#FFFFFF] desktop:rounded-[30px] rounded-[16px] desktop:w-[118] desktop:h-[29px] w-[106px] h-[21px] flex justify-center items-center">
                  Havo sovutgichlar
                </p>
                <img
                  className="mt-[35.11px] ml-[7.28px] desktop:mt-[5px] desktop:ml-[13px] desktop:w-[200.26px]"
                  src={AirConditioner}
                  alt="Air Conditioner"
                />
              </button>
            </div>
            <div className="flex items-center justify-center gap-[5px] desktop:gap-[10px]">
              <button className="desktop:w-[227px] desktop:h-[249px] w-[120px] h-[130px] desktop:bg-[#B0B0B0] bg-[#797C7D] desktop:rounded-[7px] rounded-[3px] relative overflow-hidden">
                <p className="desktop:top-[12px] desktop:left-[10px] top-[6px] left-[3px] absolute desktop:w-[186px] desktop:h-[29px] w-[114px] h-[23px] flex justify-center items-center border-[#FFFFFF] border-[1px] border-solid desktop:rounded-[30px] rounded-[16px] font-Poppins font-[400] desktop:text-[14px] text-[10px] text-[#FFFFFF]">
                  Kiryuvish mashinasi
                </p>
                <img
                  className="desktop:mt-[36px] desktop:ml-[70px] mt-[27px] ml-[31px] desktop:w-[184px]"
                  src={WashingMachine}
                  alt="Washing Machine"
                />
              </button>
              <button className="desktop:w-[431px] desktop:h-[249px] w-[234px] h-[131px] desktop:rounded-[7px] rounded-[3px] bg-[#CEAF75] overflow-hidden relative">
                <p className="desktop:top-[12px] desktop:left-[11px] top-[7px] left-[10px] desktop:w-[107px] desktop:h-[29px] w-[82px] h-[24px] flex justify-center items-center absolute border-[1px] border-solid border-[#FFFFFF] desktop:rounded-[30px] rounded-[16px] desktop:text-[14px] text-[12px] font-[400] text-[#FFFFFF]">
                  Televizorlar
                </p>
                <img
                  className="desktop:w-[343px] desktop:ml-[60px] ml-[58px] mt-[1px]"
                  src={TV}
                  alt="TV"
                />
              </button>
            </div>
          </div>
          <div>
            <div className="w-[355px] flex relative desktop:items-end desktop:w-[500px] desktop:overflow-hidden desktop:rounded-br-[7px] desktop:h-[507px]">
              <div className="desktop:w-[253px] desktop:h-[250px] w-[161px] h-[122px] bg-[#888380] desktop:rounded-tl-[7px] desktop:rounded-bl-[7px] rounded-tl-[3px] rounded-bl-[3px] overflow-hidden">
                <p className="font-Poppins font-[400] desktop:text-[14px] text-[12px] text-[#FFFFFF] desktop:w-[118px] desktop:h-[29px] w-[95px] h-[24px] flex justify-center items-center border-solid border-[1px] border-[#FFFFFF] desktop:rounded-[30px] rounded-[16px] desktop:mt-[12px] desktop:ml-[12px] mt-[9px] ml-[10px]">
                  Muzlatgichlar
                </p>
              </div>
              <div className="desktop:w-[250px] desktop:h-[437px] w-[194px] h-[217px] bg-[#888380] desktop:rounded-bl-[0px] desktop:rounded-br-[7px] desktop:rounded-tl-[7px] rounded-b-[3px] desktop:rounded-tr-[7px] rounded-tr-[3px] overflow-hidden">
                <img
                  className="absolute desktop:left-[197px] desktop:w-[118px] desktop:top-[340px] left-[129px] top-[65px] z-[1]"
                  src={Fridge}
                  alt="Fridge"
                />
                <img
                  className="absolute desktop:left-[291px] desktop:w-[209px] desktop:top-[195px] left-[221px] top-[16px] rounded-br-[3px] desktop:rounded-br-[7px]"
                  src={Fridge2}
                  alt="Fridge"
                />
              </div>
              <div className="desktop:rounded-br-[7px] desktop:border-b-[13px] desktop:border-b-[#FFFFFF] desktop:border-b-solid desktop:rounded-tr-[0px] rounded-tr-[3px] absolute desktop:top-[0px] top-[122px] z-[2] desktop:border-t-[0px] border-t-[5px] border-t-white border-t-solid desktop:border-r-[13px] border-r-[5px] border-r-white border-r-solid">
                <div className="desktop:overflow-hidden desktop:w-[240px] desktop:h-[247px] w-[156px] h-[134px] bg-[#676D86] desktop:rounded-[7px] rounded-[3px] pt-[10px] pl-[11px] overflow-hidden">
                  <p className="desktop:top-[12px] desktop:left-[12px] top-[7px] left-[11px] desktop:w-[80px] absolute desktop:h-[29px] w-[70px] h-[24px] desktop:rounded-[30px] rounded-[16px] border-[1px] border-solid border-[#FFFFFF] flex justify-center items-center desktop:text-[14px] text-[12px] font-[400] text-[#FFFFFF] ">
                    Telefonlar
                  </p>
                  <img
                    className="desktop:w-[330px] desktop:mt-[42px]"
                    src={Phone}
                    alt="Phone"
                  />
                </div>
              </div>
              <div className="absolute desktop:top-[0] top-[221px] desktop:left-[252px] left-[161px] desktop:w-[248px] desktop:h-[58px] w-[194px] h-[40px] bg-[#0F4A97] flex justify-center items-center desktop:rounded-[6px] rounded-[2px]">
                <p className="font-Roboto desktop:font-[400] desktop:text-[16px] font-[500] text-[14px] text-[#FFFFFF]">
                  Ko’proq
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsTypeBanner;

// Qaytib kelib Maxsulot turlari chiqib turuvchi qismni desktopga moslashni davom ettiramiz
