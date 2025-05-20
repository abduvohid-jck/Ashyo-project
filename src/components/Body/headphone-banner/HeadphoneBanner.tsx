import Headphone from "../../../assets/photos/headphone.svg";

function HeadphoneBanner() {
  return (
    <div className="mb-[56px]">
      <div className="container">
        <div className="rounded-[3px] w-[355px] h-[160px] bg-[#282828] relative mx-auto">
          <img
            className="absolute top-[6px] right-[175px]"
            src={Headphone}
            alt="Headphone"
          />
          <p className="w-[157px] left-[173px] top-[30px] font-Roboto font-[600] text-[14px] text-[#FFFFFF] absolute">
            Musiqa zavqini his qilish uchun ko'p mablag' sarflash shart emas!
          </p>
          <button className="w-[94px] h-[32px] left-[175px] rounded-[2px] bg-[#FFFFFF] top-[101px] absolute">
            <p className="font-Roboto font-[400] text-[11px] text-[#282828]">
              Batafsil
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeadphoneBanner;


// Headphone bannerning mobile ko'rinishi tayyor bo'ldi. Qaytib kelib Desktopga moslaymiz