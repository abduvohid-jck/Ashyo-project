import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Like from "../../../assets/photos/like.svg";
import Scale from "../../../assets/photos/scale.svg";
import Bag from "../../../assets/photos/bag.svg";
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

function PopularProducts() {
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
    <div className="mb-[48px] desktop:hidden">
      <div className="w-[375px] mx-auto px-[10px] mb-[20px]">
        <p className="font-Roboto font-[700] text-[16px] text-[#000000]">
          Eng mashxur maxsulotlar
        </p>
      </div>
      <div className="flex justify-center">
        <div className="grid justify-center gap-[15px] grid-cols-2">
          {data?.data?.items.map((product: any) => {
            return (
              <div key={product.id} className="w-[170px]">
                <div className="w-[170px] h-[180px] rounded-[3px] bg-[#EBEFF3] flex justify-center items-center relative">
                  <img
                    className="absolute top-[12px] right-[10px]"
                    src={Like}
                    alt="Like"
                  />
                  <img
                    className="w-[130px]"
                    src={images[product.image]}
                    alt={product.name}
                  />
                </div>
                <div className="mt-[12px]">
                  <p className="font-Roboto font-[400] text-[12px] text-[#06172DB2] mb-[27px]">
                    {product.name.length > 20
                      ? product.name.slice(0, 25) + "..."
                      : product.name}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="font-Roboto font-[700] text-[15px] text-[#06172D]">
                      {product.price} uzs
                    </p>
                    <div className="p-[7px] font-Roboto font-[400] text-[10px] text-[#F02C96] flex justify-center items-center rounded-[2px] bg-[#F02C961A]">
                      {product.nasiya} /{" "}
                      {Math.floor(product.price / parseInt(product.nasiya))} uzs
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-[8px] mt-[14.5px]">
                    <button className="w-[50px] h-[36px] rounded-[3px] bg-[#EBEFF3] flex justify-center items-center">
                      <img src={Scale} alt="Scale" />
                    </button>
                    <button className="flex justify-center gap-[3px] items-center w-[112px] h-[36px] bg-[#134E9B] rounded-[3px]">
                      <p className="font-Roboto font-[400] text-[12px] text-[#FFFFFF]">
                        Savatcha
                      </p>
                      <img src={Bag} alt="Bag" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <button className="mt-[30px] mx-auto w-[198px] h-[40px] bg-[#EBEFF3] flex justify-center items-center rounded-[6px] font-Roboto font-[400] text-[14px] text-[#134E9B]">
        Ko'proq
      </button>
    </div>
  );
}

export default PopularProducts;
