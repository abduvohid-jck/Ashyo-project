import AppStore from "../../assets/photos/app-store.svg";
import GooglePlay from "../../assets/photos/google-play.svg";
import Facebook from "../../assets/photos/facebook.svg";
import YouTube from "../../assets/photos/youtube.svg";
import Telegram from "../../assets/photos/telegram.svg";
import Twitter from "../../assets/photos/twitter.svg";
import Instagram from "../../assets/photos/instagram.svg";
import Message from "../../assets/icons/message.svg";

function Footer() {
  return (
    <div>
      <div className="container">
        <div className="w-[355px] mx-auto desktop:hidden">
          <p className="font-Roboto font-[700] text-[14px] text-[#000000B2]">
            Mobil ilovani yuklab oling
          </p>
          <div className="mt-[19px] flex justify-between items-center mb-[27px]">
            <button className="flex items-center justify-center w-[170px] h-[44px] rounded-[3px] bg-[#EBEFF3] gap-[12px]">
              <img src={AppStore} alt="App Store" />
              <p className="font-Montserrat font-[500] text-[12px]">
                App Store
              </p>
            </button>
            <button className="bg-[#EBEFF3] gap-[12px] flex items-center justify-center w-[170px] h-[44px] rounded-[3px]">
              <img src={GooglePlay} alt="GooglePlay" />
              <p className="font-Montserrat font-[500] text-[12px] text-[#000000]">
                Google Play
              </p>
            </button>
          </div>
          <div className="flex justify-center gap-[27px] items-center">
            <div className="w-[160px]">
              <p className="font-Roboto font-[700] text-[14px] text-[#000000B2] mb-[14px]">
                Menyu
              </p>
              <p className="cursor-pointer font-Roboto font-[400] text-[12px] text-[#000000B2] mb-[10px]">
                Ashyo haqida
              </p>
              <p className="cursor-pointer font-Roboto font-[400] text-[12px] text-[#000000B2] mb-[10px]">
                Foydalanish shartlari
              </p>
              <p className="cursor-pointer font-Roboto font-[400] text-[12px] text-[#000000B2] mb-[10px]">
                Maxfiylik va hafsizlik siyosati
              </p>
              <p className="cursor-pointer font-Roboto font-[400] text-[12px] text-[#000000B2] mb-[10px]">
                Mahsulotlarni va tovarlarni qaytarish siyosati
              </p>
              <p className="cursor-pointer font-Roboto font-[400] text-[12px] text-[#000000B2]">
                Biz bilan aloqa
              </p>
            </div>
            <div>
              <p className="font-Roboto font-[700] text-[14px] text-[#000000B2] mb-[9px]">
                Aloqa
              </p>
              <p className="cursor-pointer font-Roboto font-[700] text-[16px] text-[#00000080]">
                +998 (71) 123-45-67
              </p>
              <div className="w-[165px] grid grid-cols-3 gap-[11px] mt-[12px]">
                <button className="w-[48px] h-[44px] bg-[#EBEFF3] rounded-[7px] flex justify-center items-center">
                  <img src={Facebook} alt="Facebook" />{" "}
                </button>
                <button className="w-[48px] h-[44px] bg-[#EBEFF3] rounded-[7px] flex justify-center items-center">
                  <img src={YouTube} alt="Facebook" />{" "}
                </button>
                <button className="w-[48px] h-[44px] bg-[#EBEFF3] rounded-[7px] flex justify-center items-center">
                  <img src={Telegram} alt="Facebook" />{" "}
                </button>
                <button className="flex justify-center items-center w-[48px] h-[44px] bg-[#EBEFF3] rounded-[7px]">
                  <img src={Twitter} alt="Facebook" />{" "}
                </button>
                <button className="w-[48px] h-[44px] bg-[#EBEFF3] flex justify-center items-center rounded-[7px]">
                  <img src={Instagram} alt="Facebook" />{" "}
                </button>
              </div>
            </div>
          </div>
          <p className="mt-[38px] font-Roboto font-[400] text-[12px] text-[#00000066] mb-[38px]">
            © 2022 Ashyo ro’hatdan otgan litsenzalangan bu brend.
          </p>
        </div>
        <div className="hidden desktop:justify-between desktop:items-center desktop:flex desktop:mb-[57px]">
          <div>
            <p className="font-Roboto font-[700] text-[20px] text-[#000000B2]">
              Bizning ijtimoiy tarmoqlarda
            </p>
            <div className="flex items-center gap-[10px] mt-[21px]">
              <button className="w-[48px] h-[44px] bg-[#EBEFF3] rounded-[7px] flex justify-center items-center">
                <img src={Facebook} alt="Facebook" />{" "}
              </button>
              <button className="w-[48px] h-[44px] bg-[#EBEFF3] rounded-[7px] flex justify-center items-center">
                <img src={YouTube} alt="Facebook" />{" "}
              </button>
              <button className="w-[48px] h-[44px] bg-[#EBEFF3] rounded-[7px] flex justify-center items-center">
                <img src={Telegram} alt="Facebook" />{" "}
              </button>
              <button className="flex justify-center items-center w-[48px] h-[44px] bg-[#EBEFF3] rounded-[7px]">
                <img src={Twitter} alt="Facebook" />{" "}
              </button>
              <button className="w-[48px] h-[44px] bg-[#EBEFF3] flex justify-center items-center rounded-[7px]">
                <img src={Instagram} alt="Facebook" />{" "}
              </button>
            </div>
            <p className="font-Roboto font-[700] text-[20px] text-[#000000B2] mt-[39.33px]">
              Mobil ilovani yuklab oling
            </p>
            <div className="mt-[12px] flex items-center gap-[12px]">
              <button className="flex items-center justify-center w-[188px] h-[66px] rounded-[10px] bg-[#EBEFF3] gap-[12px]">
                <img src={AppStore} alt="App Store" />
                <p className="font-Montserrat font-[700] text-[16px] text-[#0A1729]">
                  App Store
                </p>
              </button>
              <button className="bg-[#EBEFF3] gap-[12px] flex items-center justify-center w-[188px] h-[66px] rounded-[10px]">
                <img src={GooglePlay} alt="GooglePlay" />
                <p className="font-Montserrat font-[700] text-[16px] text-[#0A1729]">
                  Google Play
                </p>
              </button>
            </div>
          </div>
          <div>
            <div className="w-[236px]">
              <p className="font-Roboto font-[700] text-[20px] text-[#000000B2] mb-[18px]">
                Menyu
              </p>
              <p className="cursor-pointer font-Roboto font-[400] text-[16px] text-[#000000B2] mb-[12px]">
                Ashyo haqida
              </p>
              <p className="cursor-pointer font-Roboto font-[400] text-[16px] text-[#000000B2] mb-[12px]">
                Foydalanish shartlari
              </p>
              <p className="cursor-pointer font-Roboto font-[400] text-[16px] text-[#000000B2] mb-[12px]">
                Maxfiylik va hafsizlik siyosati
              </p>
              <p className="cursor-pointer font-Roboto font-[400] text-[16px] text-[#000000B2] mb-[12px]">
                Mahsulotlarni va tovarlarni qaytarish siyosati
              </p>
              <p className="cursor-pointer font-Roboto font-[400] text-[16px] text-[#000000B2]">
                Biz bilan aloqa
              </p>
            </div>
          </div>
          <div>
            <p className="font-Roboto font-[700] text-[20px] text-[#000000B2] mb-[13px]">
              Aloqa
            </p>
            <p className="cursor-pointer font-Roboto font-[700] text-[24px] text-[#06172D]">
              +998 (71) 123-45-67
            </p>
            <p className="font-Roboto font-[400] text-[16px] text-[#000000B2] mt-[32px]">
              Savolingiz bormi?
            </p>
            <div className="flex items-center justify-center gap-[13px] w-[314px] h-[54px] bg-[#EBEFF3] rounded-[6px] mt-[12px]">
              <input
                className="outline-none bg-[#EBEFF3] font-Roboto font-[44] text-[12px] w-[255px]"
                type="text"
                placeholder=" O’zingiz qiziqtirgan savollarni bering"
              />
              <img className="cursor-pointer" src={Message} alt="Message" />
            </div>
          </div>
        </div>
        <p className="font-Roboto font-[400] text-[12px] text-[#00000066] mb-[57px] hidden desktop:block">
          © 2022 Ashyo ro’hatdan otgan litsenzalangan bu brend.
        </p>
      </div>
    </div>
  );
}

export default Footer;
