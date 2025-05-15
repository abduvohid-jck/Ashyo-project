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
      <PopularProductsSwiper />
    </div>
  );
}

export default Body;
