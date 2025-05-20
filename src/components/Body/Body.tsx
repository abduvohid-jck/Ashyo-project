import Brands from "./brands/Brands";
import HeadphoneBanner from "./headphone-banner/HeadphoneBanner";
import PopularProductsSwiper from "./popular-products-swiper/PopularProductsSwiper";
import PopularProducts from "./popular-products/PopularProducts";
import ProductsTypeBanner from "./products-type-banner/ProductsTypeBanner";
import PromotionProductsMobile from "./promotion-products-mobile/PromotionProductsMObile";
import PromotionProducts from "./promotion-products/PromotionProducts";
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
      <ProductsTypeBanner />
      <PromotionProducts />
      <PromotionProductsMobile />
      <HeadphoneBanner />
    </div>
  );
}

export default Body;

// Swiper qismi bitdi. Kelib tagidagi bannerga o'tamiz
