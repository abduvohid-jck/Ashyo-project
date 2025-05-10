import Location from "../../assets/icons/location.svg";
import Arrow from "../../assets/icons/arrow.svg";
function Navbar() {
  return (
    <div>
      <div className="bg-[#EBEFF3] hidden desktop:block py-[11px]">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={Location} alt="Location" />
              <p className="font-Roboto font-[400] text-[14px] text-[#545D6A] ml-[11px] mr-[28px]">
                Tashkent
              </p>
              <p className="font-Roboto font-[400] text-[14px] text-[#545D6A] mr-[15px]">
                About Us
              </p>
              <p className="font-Roboto font-[400] text-[14px] text-[#545D6A] mr-[15px]">
                Products
              </p>
              <p className="font-Roboto font-[400] text-[14px] text-[#545D6A]">
                Contacts
              </p>
            </div>
            <div className="flex items-center">
              <p className="mr-[38px] font-Roboto font-[600] text-[14px] text-[#545D6A]">
                +998 (71) 123-45-67
              </p>
              <p className="mr-[7px] font-[500] text-[14px] text-[#545D6A] font-Inter">
                Uz
              </p>
              <img src={Arrow} alt="Arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
