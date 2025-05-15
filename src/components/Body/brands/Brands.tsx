import Artel from "../../../assets/photos/artel.svg";
import Apple from "../../../assets/photos/apple.svg";
import Samsung from "../../../assets/photos/samsung.svg";
import Vivo from "../../../assets/photos/vivo.svg";
import Nokia from "../../../assets/photos/nokia.svg";
import Huawei from "../../../assets/photos/huawei.svg";
import Mi from "../../../assets/photos/mi.svg";

function Brands() {
  return (
    <div className="mt-[33px] desktop:mt-[100px] mx-auto desktop:mb-[108px] mb-[41px]">
      <div className="container desktop:flex desktop:justify-center desktop:items-center desktop:gap-[10px]">
        <div className="flex items-center desktop:gap-[10px] gap-[5px] justify-center">
          <div className="flex flex-col desktop:gap-[10px] gap-[5px] items-center">
            <button className="desktop:w-[310px] w-[175px] desktop:h-[98px] desktop:rounded-[6px] h-[60px] justify-center items-center bg-[#67B43733] rounded-[2px]">
              <img
                className="inline-block desktop:w-[110px] desktop:h-[50px]"
                src={Artel}
                alt="Artel"
              />
            </button>
            <button className="desktop:w-[310px] w-[175px] desktop:h-[169px] h-[100px] flex justify-center items-center bg-[#0000001A] desktop:rounded-[6px] rounded-[2px]">
              <img
                className="inline-block desktop:h-[98px] desktop:w-[82px]"
                src={Apple}
                alt="Apple"
              />
            </button>
          </div>
          <div className="flex flex-col desktop:gap-[10px] gap-[5px] items-center">
            <button className="desktop:w-[300px] w-[175px] desktop:h-[167px] h-[100px] flex justify-center items-center bg-[#034EA21A] desktop:rounded-[6px] rounded-[2px]">
              <img
                className="inline-block desktop:h-[73px] desktop:w-[206px]"
                src={Samsung}
                alt="Samsung"
              />
            </button>
            <button className="desktop:w-[300px] w-[175px] desktop:h-[100px] h-[60px] flex justify-center items-center bg-[#006DB833] desktop:rounded-[6px] rounded-[2px]">
              <img
                className="inline-block desktop:w-[108px] desktop:h-[56px]"
                src={Vivo}
                alt="Vivo"
              />
            </button>
          </div>
        </div>
        <div className="flex items-center desktop:gap-[10px] gap-[5px] justify-center mt-[5px] desktop:mt-[0px]">
          <div className="flex flex-col items-center desktop:gap-[10px] gap-[5px]">
            <button className="flex items-center justify-center desktop:w-[320px] w-[175px] desktop:h-[120px] h-[70px] bg-[#00439C1F] desktop:rounded-[6px] rounded-[2px]">
              <img
                className="inline-block desktop:w-[152px] desktop:h-[86px]"
                src={Nokia}
                alt="Nokia"
              />
            </button>
            <button className="desktop:w-[320px] w-[175px] desktop:h-[147px] h-[90px] justify-center items-center bg-[#FF1A1F33] desktop:rounded-[6px] rounded-[2px]">
              <img
                className="inline-block desktop:h-[106px] desktop:w-[142px]"
                src={Huawei}
                alt="Huawei"
              />
            </button>
          </div>
          <div className="flex flex-col desktop:gap-[10px] gap-[5px] items-center">
            <button className="desktop:w-[220px] w-[175px] desktop:h-[223px] h-[120px] flex justify-center items-center bg-[#FF670033] desktop:rounded-[6px] rounded-[2px]">
              <img
                className="inline-block desktop:w-[138px] desktop:h-[83px]"
                src={Mi}
                alt="Mi"
              />
            </button>
            <button className="desktop:w-[220px] w-[175px] desktop:h-[44px] h-[40px] flex justify-center items-center desktop:bg-[#EBEFF3] bg-[#0F4A97] desktop:rounded-[6px] rounded-[2px]">
              <p className="font-Roboto font-[500] desktop:text-[16px] desktop:text-[#134E9B] text-[14px] text-[#FFFFFF]">
                Ko'proq
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brands;
