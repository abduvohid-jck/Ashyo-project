import Brands from "./brands/Brands";
import PopularProductsSwiper from "./popular-products-swiper/PopularProductsSwiper";
import PopularProducts from "./popular-products/PopularProducts";
import MySwiper from "./swiper/MySwiper";

function Body() {
  return (
    <div>
      <MySwiper />
      <Brands />
      <PopularProducts />
      <div className="flex-col hidden desktop:flex gap-[80px] mb-[120px]">
        <PopularProductsSwiper />
        <PopularProductsSwiper />
        <PopularProductsSwiper />
      </div>
    </div>
  );
}

export default Body;
