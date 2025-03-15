import Image from "next/image";
// import BuildingsDesk from "../../../assets/images/buildings-desk.png";
import LocationImage from "../../../assets/images/Location.png";
import BottomBorderImg from "../../../assets/images/luxury-txt-border (2).png";
// import LocationPinImg from "../../../assets/svg/location-pin.svg";
import LocationPinImg from "../../../assets/svg/pin-red.svg";

const Location = () => {
  return (
    <div
      className="lg:pl-[100px] flex flex-col lg:flex-row items-center lg:items-start justify-between lg:mt-20"
      id="location"
    >
      <div className="lg:py-[60px] order-2 lg:order-1 mt-10 lg:mt-0 px-[14px] lg:w-[40%]">
        <p className="text-[20px] text-center lg:text-left lg:text-[32px]">
        A Destination Like No Other
        </p>
        <Image
          src={BottomBorderImg}
          width={211}
          height={40}
          alt="border"
          className="my-[14px] mx-auto lg:ml-0"
        />
        <div className="mt-[50px]">
          <div className="flex flex-row items-center">
            <p>Exclusive Landmark:
            </p>
            <div className="ml-10 lg:ml-[50px] ">
              <p className="text-xs lg:text-[20px] text-[#0F57D1] text-center">
                5 Mins
              </p>
              <p className="text-xs lg:text-[20px] text-center mt-1">
                  Burj Khalifa
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center mt-10">
            <p>
            Shopping &<br />
            Retail:
            </p>
            <div className="ml-10 border-r-[2px] border-r-[#0F57D1] pr-5">
              <p className="text-xs lg:text-[20px] text-[#0F57D1] text-center">
                4 Mins
              </p>
              <p className="text-xs lg:text-[20px] text-center mt-1">
              Dubai  Opera
              </p>
            </div>
            <div className="ml-10">
              <p className="text-xs lg:text-[20px] text-[#0F57D1] text-center">
                5 Mins
              </p>
              <p className="text-xs lg:text-[20px] text-center mt-1">
              Dubai Mall
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center mt-10">
            <p>
            Financial Hub:
            </p>
            <div className="ml-10 ">
              <p className="text-xs lg:text-[20px] text-[#0F57D1] text-center">
                12 Mins
              </p>
              <p className="text-xs lg:text-[20px] text-center mt-1">
              DIFC (Dubai’s Financial Hub)
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center mt-10">
            <p>
              Fine Dining &<br />
              Culinary
              <br />
              Experiences
            </p>
            <div className="ml-10 border-r-[2px] border-r-[#0F57D1] pr-5">
              <p className="text-xs lg:text-[20px] text-[#0F57D1] text-center">
                8 Mins
              </p>
              <p className="text-xs lg:text-[20px] text-center mt-1">
                Flambe
                <br />
                Restaurant &
                <br />
                Bar
              </p>
            </div>
            <div className="ml-10 border-r-[2px] border-r-[#0F57D1] pr-5">
              <p className="text-xs lg:text-[20px] text-[#0F57D1] text-center">
                8 Mins
              </p>
              <p className="text-xs lg:text-[20px] text-center mt-1">
                Mogiya
                <br />
                Authentic
                <br />
                Japanese
              </p>
            </div>
            <div className="ml-10">
              <p className="text-xs lg:text-[20px] text-[#0F57D1] text-center">
                8 Mins
              </p>
              <p className="text-xs lg:text-[16px] text-center mt-1">
                Tashas
                <br />
                Cafe
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center lg:justify-start mt-10">
          <Image src={LocationPinImg} width={24} height={24} alt="location" />
          <p className="text-sm lg:text-[16px] text-black ml-[14px]">
            Prime Location, Unparalleled Convenience.
          </p>
        </div>
      </div>
      <div className="relative order-1 lg:order-2">
        <Image
          src={LocationImage}
          width={863}
          height={21}
          alt="buildings"
          className="lg:w-[800px] lg:h-[721px] object-cover"
        />
      </div>
    </div>
  );
};

export default Location;
