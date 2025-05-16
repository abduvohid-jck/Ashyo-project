import { Swiper, SwiperSlide } from "swiper/react";
import Like from "../../../assets/photos/like.svg";
import Scale from "../../../assets/photos/scale.svg";
import Bag from "../../../assets/photos/bag.svg";
import { Navigation, Autoplay } from "swiper/modules";
import Samsung from "../../../assets/photos/s25.png";
import Cannon from "../../../assets/photos/cannon.png";
import Playstation from "../../../assets/photos/ps5.png";
import Bose from "../../../assets/photos/bose.png";
import Dell from "../../../assets/photos/dell.png";
import Airpodspro from "../../../assets/photos/airpods.png";
import Logitech from "../../../assets/photos/logitech.png";
import Ipad from "../../../assets/photos/ipad.png";
import Macbook from "../../../assets/photos/macbook-p.png";
import Xiaomi from "../../../assets/photos/xiaomi12.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function PopularProductsSwiper() {
  function getProducts() {
    const res = axios.get("https://api.ashyo.fullstackdev.uz/products");
    return res;
  }

  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const images: any = {
    "/macbookprom2.png": Macbook,
    "/xiamo12lite.png": Xiaomi,
    "/s25ultra.png": Samsung,
    "/canon.png": Cannon,
    "/ps5.png": Playstation,
    "/boseque.png": Bose,
    "/dellxps5.png": Dell,
    "/airpodspro2.png": Airpodspro,
    "/logitech.png": Logitech,
    "/ipad12.png": Ipad,
  };

  return (
    <div className="hidden desktop:block">
      <div className="container">
        <p className="font-Roboto font-[700] text-[32px] text-[#000000] mb-[50px]">
          Eng mashxur mahsulotlar
        </p>
      </div>
      <Swiper
        loop={true}
        spaceBetween={30}
        slidesPerView={5}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper w-[1485px]"
      >
        {data?.data?.items.map((product: any) => {
          return (
            <SwiperSlide className="!w-[273px]">
              <div key={product.id} className="w-[273px]">
                <div className="w-[273px] h-[280px] rounded-[8px] bg-[#EBEFF3] flex justify-center items-center relative">
                  <img
                    className="w-[24px] h-[24px] top-[20px] right-[24px] absolute"
                    src={Like}
                    alt="Like"
                  />
                  <img
                    className=" w-[202.83px]"
                    src={images[product.image]}
                    alt={product.name}
                  />
                </div>
                <div className="mt-[16px]">
                  <p className="font-Roboto font-[400] text-[14px] text-[#06172DB2] mb-[28px]">
                    {product.name.length > 20
                      ? product.name.slice(0, 25) + "..."
                      : product.name}
                  </p>
                  <div className="flex items-end justify-between">
                    <div className="flex flex-col items-start">
                      <p className="font-Roboto font-[700] text-[20px] text-[#06172D]">
                        {product.price} uzs
                      </p>
                      <div className="py-[7px] px-[10px] font-Roboto font-[400] text-[14px] text-[#F02C96] flex justify-center items-center rounded-[3px] bg-[#F02C961A]">
                        {product.nasiya} /{" "}
                        {Math.floor(product.price / parseInt(product.nasiya))}{" "}
                        uzs
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-[10px]">
                      <button className="w-[52px] h-[44px] rounded-[6px] bg-[#EBEFF3] flex justify-center items-center">
                        <img
                          className="w-[24px] h-[24px]"
                          src={Scale}
                          alt="Scale"
                        />
                      </button>
                      <button className="flex justify-center items-center w-[52px] h-[44px] bg-[#134E9B] rounded-[6px]">
                        <img
                          className="w-[24px] h-[24px]"
                          src={Bag}
                          alt="Bag"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default PopularProductsSwiper;
