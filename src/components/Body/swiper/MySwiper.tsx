import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import Xiaomi from "../../../assets/photos/xiaomi.png";
import Samsung from "../../../assets/photos/samsung.png";
import Macbook from "../../../assets/photos/macbook.png";

function MySwiper() {
  let banners = [
    {
      name: "MacBook Pro M2 – Kuchli va Ishonchli",
      description:
        "MacBook Pro M2 bilan samaradorlik va kreativlikni birlashtiring. 14-inch Retina displey va M2 chip.",
      image: Macbook,
    },
    {
      name: "Samsung Galaxy S25 Ultra yangiliklari",
      description:
        "Samsung Galaxy S25 Ultra – yuqori sifatli kamera va kuchli protsessor bilan sizga ajoyib tajriba taqdim etadi.",
      image: Samsung,
    },
    {
      name: "Siz kutgan Xiaomi 12 Mi Lite",
      description:
        "Orginallik va qulay narxni o'zida jamlagan Xiaomi 12 Mi Lite siz uchun eng yaxshi takliflarimizdan biridir!",
      image: Xiaomi,
    },
  ];

  return (
    <div className="bg-[#F3F0F0] h-[210px] desktop:h-[450px]">
      <div>
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper h-[210px] desktop:h-[450px]"
          loop={true}
        >
          <div>
            {banners.map((banner: any) => {
              return (
                <SwiperSlide>
                  <div className="container">
                    <div className="flex items-center justify-between w-[375px] desktop:w-[1180px] h-[210px] desktop:h-[450px] mx-auto">
                      <div>
                        <p className="font-Robotobold font-[900] text-[22px] desktop:text-[44px] text-[#203F68] desktop:text-[#0A1729] leading-[25px] desktop:leading-[50px]">
                          {banner.name}
                        </p>
                        <p className="font-Roboto font-[400] text-[11px] desktop:text-[16px] text-[#203F6899] desktop:text-[#545D6A] mt-[5px] desktop:mt-[6px]">
                          {banner.description}
                        </p>
                        <button className="w-[111px] desktop:w-[161px] h-[36px] desktop:h-[54px] flex justify-center items-center font-Roboto font-[400] text-[12px] desktop:text-[16px] text-[#FFFFFF] bg-[#0F4A97] rounded-[3px] desktop:rounded-[6px] mt-[17px] desktop:mt-[22px]">
                          Batafsil
                        </button>
                      </div>
                      <div>
                        <img
                          className="w-[300px] desktop:w-[488px] pr-[10px]"
                          src={banner.image}
                          alt="Banner image"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default MySwiper;
