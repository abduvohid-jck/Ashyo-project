import Headphone from "../../../assets/photos/headphone.svg";

function HeadphoneBanner() {
  return (
    <div className="mb-[56px] desktop:mb-[172px]">
      <div className="container">
        <div className="rounded-[3px] desktop:rounded-[10px] desktop:w-[1180px] w-[355px] desktop:h-[420px] h-[160px] bg-[#282828] relative mx-auto">
          <img
            className="desktop:w-[518px] absolute desktop:top-[-1px] top-[6px] desktop:right-[598px] right-[175px]"
            src={Headphone}
            alt="Headphone"
          />
          <p className="desktop:w-[438px] w-[157px] desktop:left-[649px] left-[173px] desktop:top-[97px] top-[30px] font-Roboto desktop:font-[700] desktop:text-[32px] font-[600] text-[14px] text-[#FFFFFF] absolute">
            Musiqa zavqini his qilish uchun ko'p mablag' sarflash shart emas!
          </p>
          <button className="desktop:w-[161px] w-[94px] desktop:h-[54px] h-[32px] desktop:left-[651px] left-[175px] desktop:rounded-[6px] rounded-[2px] bg-[#FFFFFF] desktop:top-[253px] top-[101px] absolute">
            <p className="font-Roboto font-[400] desktop:text-[16px] text-[11px] text-[#282828]">
              Batafsil
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeadphoneBanner;
