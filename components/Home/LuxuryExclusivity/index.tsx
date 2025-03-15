"use client";
import Image from "next/image";
import LuxuryImgDesk from "../../../assets/images/luxury-desk.png";
import LuxuryTextBorderImg from "../../../assets/images/luxuryD.png";
import { Button } from "../../ui/button";

const LuxuryExclusivity = () => {
  const handleOnClick = () => {
    const getInTouch = document.getElementById("getInTouch");
    if (getInTouch) {
      getInTouch.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full h-auto lg:h-[800px] pb-[100px] lg:py-[80px] px-6 lg:px-0 flex flex-col items-center text-center" id="experience">
      <div className="flex flex-col lg:flex-row items-center h-full gap-8 lg:gap-16">
        {/* Image Section */}
        <div className="w-full lg:w-[50%] flex justify-start">
          <Image
            src={LuxuryImgDesk}
            width={1200}
            height={1800}
            alt="luxury desk"
            className="w-full h-[600px] lg:h-[700px] object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="mt-8 lg:mt-0 w-full lg:w-[40%] text-center">
          <h2 className="text-[22px] lg:text-[32px] text-black font-bold leading-tight mb-6">
            The Fairmont Lifestyle:
            <br className="hidden lg:block" /> Your Home here is a New Standard of Luxury Living
          </h2>
          
          <div className="flex justify-center">
            <Image
              src={LuxuryTextBorderImg}
              width={191}
              height={35}
              alt="border"
              className="my-6 lg:my-[40px]"
            />
          </div>
          
          <ul className="text-black text-[14px] lg:text-[20px] space-y-5 font-light">
            <li><span className="font-bold">• Floor to Ceiling Windows</span> – Stunning, unobstructed views of Burj Khalifa, Dubai Fountain & Dubai Canal</li>
            <li><span className="font-bold">• Premium Flooring</span> – Elegant Italian Porcelain, natural marble & engineered wood finishes</li>
            <li><span className="font-bold">• Curated Interiors</span> – Premium finishes, European kitchens, and smart home integration</li>
            <li><span className="font-bold">• World-Class Hospitality</span> – 24/7 concierge, housekeeping, private dining, and lifestyle services</li>
          </ul>

          <div className="flex justify-center mt-8">
            <Button
              className="bg-[#0F57D1] hover:bg-[#0C47A0] text-white text-lg font-medium py-3 px-6 rounded-lg shadow-lg"
              onClick={handleOnClick}
            >
              Get Exclusive Brochure & Floor Plans
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryExclusivity;
