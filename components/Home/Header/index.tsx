"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import DotsBlackImg from "../../../assets/svg/DotS.svg";
import heroimg from "../../../assets/svg/heroimg.svg";
import fairmontlogo from "../../../assets/svg/fairmont logo.svg";
import WhatsAppIcon from "../../../assets/svg/whatsapp.svg";
import PhoneIcon from "../../../assets/svg/call.svg";
import arrowDown from "../../../assets/svg/arrow-down.svg";

const Header = () => {
  const handleOnClick = () => {
    const registerInterest = document.getElementById("registerInterest");
    if (registerInterest) {
      registerInterest.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <div
        className="min-h-screen w-full bg-no-repeat bg-cover flex items-center relative"
        id="header"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={heroimg}
            alt="Fairmont Interior"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Dots Decoration */}
        <div className="absolute top-40 left-2 z-10">
          <Image src={DotsBlackImg} width={60} height={75} alt="dots-black" />
        </div>

        {/* Info Card */}
        <div className="w-full max-w-[720px] bg-white/60 backdrop-blur-sm p-6 sm:p-8 lg:p-10 mx-4 sm:mx-6 lg:ml-20 rounded-lg z-10">
          <div className="flex justify-left mb-6">
            <Image
              src={fairmontlogo}
              width={180}
              height={70}
              alt="Fairmont Logo"
              className="object-contain"
            />
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-black mb-4">
            Invest in Fairmont Residences Solara Tower, Downtown Dubai
          </h1>

          <div className="space-y-3 mb-6">
            {[
              "1-4 Bedroom Apartments & 5-Bedroom Penthouses",
              "Starting from INR 8.7 Cr*",
              "Handover: Q4 2027",
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="w-1 h-6 bg-blue-600 mr-3"></div>
                <p className="text-black text-sm sm:text-base">{item}</p>
              </div>
            ))}
            <div className="flex items-start">
              <div className="w-1 h-6 bg-blue-600 mr-3 mt-1"></div>
              <p className="text-black text-sm sm:text-base">
                An exclusive collection of branded residences offering
                breathtaking views of the Dubai Canal & Burj Khalifa.
              </p>
            </div>
          </div>

          <Button
            className="bg-blue-600 text-white rounded px-6 py-3 text-base font-medium hover:bg-blue-700 transition w-[180px]"
            onClick={handleOnClick}
          >
            Register Your Interest
          </Button>
        </div>

        {/* Contact buttons - grouped neatly */}
<div className="absolute right-8 bottom-32 z-20 flex flex-col space-y-4">
  <div className="flex flex-col space-y-4 bg-white/50 backdrop-blur-sm p-3 rounded-xl">
    <Button variant="ghost" className="p-3 hover:bg-gray-100 transition">
      <Image src={WhatsAppIcon} width={24} height={24} alt="WhatsApp" />
    </Button>
    <Button variant="ghost" className="p-3 hover:bg-gray-100 transition">
      <Image src={PhoneIcon} width={24} height={24} alt="Phone" />
    </Button>
  </div>
</div>


        {/* Scroll Down Indicator */}
        <div
  className="absolute bottom-0 right-50 flex flex-col items-end cursor-pointer"
  onClick={handleScrollDown}
>
  <div className="bg-white/30 backdrop-blur-sm p-8 rounded-full flex items-center justify-center">
    <Image src={arrowDown} width={34} height={34} alt="Scroll Down" className="w-6 h-6" />
  </div>
  <p className="text-white mt-4 text-l2">Scroll Down</p>
</div>

      </div>
    </div>
  );
};

export default Header;
