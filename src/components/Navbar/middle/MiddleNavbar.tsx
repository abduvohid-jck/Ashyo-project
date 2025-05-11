import Logo1 from "../../../assets/photos/logo-1.svg";
import Logo2 from "../../../assets/photos/logo-2.svg";
import BurgerMenu from "../../../assets/icons/burger-menu.svg";
import Arrow from "../../../assets/icons/arrow-categories.svg";
import MagnifyingGlass from "../../../assets/icons/magnifying-glass.svg";
import Scale from "../../../assets/icons/scale.svg";
import Heart from "../../../assets/icons/heart.svg";
import Cart from "../../../assets/icons/cart.svg";
import User from "../../../assets/icons/user.svg";

function MiddleNavbar() {
  return (
    <div className="mt-[60px] mb-[27px] desktop:mt-[17px]">
      <div className="container">
        <div className="desktop:flex desktop:items-center desktop:justify-center">
          <div className="flex items-center justify-between desktop:justify-normal">
            <div className="flex items-center desktop:mr-[53px]">
              <img src={Logo1} alt="Logo1" />
              <img src={Logo2} alt="Logo2" />
            </div>
            <p className="font-Roboto font-[600] text-[14px] text-[#203F68] desktop:hidden">
              +998 (71) 123-45-67
            </p>
            <img
              src={BurgerMenu}
              alt="Burger Menu"
              className="desktop:hidden"
            />
          </div>
          <div className="mt-[18px] flex items-center justify-between desktop:mt-0 desktop:justify-normal">
            <button className="desktop:mr-[10px] flex gap-[10px] desktop:gap-[20px] items-center justify-center w-[121px] desktop:w-[160px] h-[40px] desktop:h-[48px] bg-[#134E9B] rounded-[3px] desktop:rounded-[6px] font-Roboto font-[500] text-[12px] desktop:text-[16px] text-[#FFFFFF]">
              Kategorya <img src={Arrow} alt="Arrow" />
            </button>
            <div className="bg-[#EBEFF3] flex items-center pl-[21.03px] desktop:pl-[26px] gap-[32.57px] rounded-[3px] desktop:rounded-[6px]">
              <input
                className="w-[136.4px] desktop:w-[425px] my-[12px] desktop:my-[14.3px] bg-[#EBEFF3] outline-none font-Roboto font-[400] text-[10px] desktop:text-[13px]"
                type="text"
                placeholder="What are you looking for?"
              />
              <button className="desktop:w-[60px] w-[40px] desktop:h-[48px] h-[40px] bg-[#134E9B] rounded-[3px] desktop:rounded-[6px] flex justify-center items-center">
                <img src={MagnifyingGlass} alt="Magnifying glass" />
              </button>
            </div>
          </div>
          <div className="hidden desktop:flex desktop:ml-[51px] desktop:items-center desktop:gap-[15px]">
            <div className="w-[50px] h-[48px] rounded-[6px] flex justify-center items-center bg-[#EBEFF3]">
              <img src={Scale} alt="Scale" />
            </div>
            <div className="w-[50px] h-[48px] rounded-[6px] flex justify-center items-center bg-[#EBEFF3]">
              <img src={Heart} alt="Heart" />
            </div>
            <div className="w-[50px] h-[48px] rounded-[6px] flex justify-center items-center bg-[#EBEFF3]">
              <img src={Cart} alt="Cart" />
            </div>
            <div className="w-[50px] h-[48px] rounded-[6px] flex justify-center items-center bg-[#EBEFF3]">
              <img src={User} alt="Profile" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddleNavbar;

// Navbarning middle qismi deyarli tayyor bo'ldi. Faqat shu Profile buttondagi User icon qiyshayib qolgan.
// O'shaning o'rniga yaxshiroq User icon qo'yib qo'y
