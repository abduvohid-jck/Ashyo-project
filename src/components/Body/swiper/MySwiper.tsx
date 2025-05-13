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
    <div className="bg-[#F3F0F0] h-[450px]">
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
          className="mySwiper h-[450px]"
          loop={true}
        >
          <div>
            {banners.map((banner: any) => {
              return (
                <SwiperSlide>
                  <div className="container">
                    <div className="flex items-center justify-between w-[1180px] h-[450px]">
                      <div>
                        <p className="font-Robotobold font-[900] text-[44px] text-[#0A1729] leading-[50px]">
                          {banner.name}
                        </p>
                        <p className="font-Roboto font-[400] text-[16px] text-[#545D6A] mt-[6px]">
                          {banner.description}
                        </p>
                        <button className="w-[161px] h-[54px] flex justify-center items-center font-Roboto font-[400] text-[16px] text-[#FFFFFF] bg-[#0F4A97] rounded-[6px] mt-[22px]">
                          Batafsil
                        </button>
                      </div>
                      <div>
                        <img
                          className="w-[488px]"
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


