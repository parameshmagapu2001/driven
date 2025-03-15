"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import BottomBorderImg from "../../../assets/images/luxury-txt-border (2).png";

const Item = ({ img, title }: { img: string; title: string }) => {
  return (
    <div className="w-[220px] sm:w-[250px] h-[200px] sm:h-[220px] rounded-[15px] border border-[#0F57D1] flex items-center justify-center p-3 sm:p-4">
      <div
        className={cn(
          "h-full w-full rounded-[15px] flex items-end p-3 bg-no-repeat bg-cover",
          img
        )}
      >
        <p className="text-[14px] sm:text-[16px] text-white text-center">{title}</p>
      </div>
    </div>
  );
};

const Amenities = () => {
  const handleOnClick = () => {
    const getInTouch = document.getElementById("getInTouch");
    if (getInTouch) {
      getInTouch.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="w-full h-[350px] sm:h-[400px] bg-[url(/images/amenities-mobile-bg.png)] lg:bg-[url(/images/amenities-desk.png)] bg-center bg-no-repeat bg-cover flex flex-col items-center justify-center text-white text-center">
        <p className="text-[18px] sm:text-[22px] lg:text-[28px] font-bold">Amenities of the Project</p>
        <Image src={BottomBorderImg} width={160} height={30} alt="border" className="my-3 mx-auto" />
        <p className="text-[12px] sm:text-[14px]">At Marriott Residences, luxury is not just a promise—it&apos;s a lifestyle.</p>
      </div>
      
      {/* Amenities Section */}
      <div className="flex flex-col items-center mt-16 w-full px-4 lg:px-0" id="gallery">
  {/* First Row with 3 Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 justify-items-center">
    <Item title="60m Infinity Pool & Rooftop Lounge" img="bg-[url(/images/swimming.svg)]" />
    <Item title="Private Cinema & Golf Simulator" img="bg-[url(/images/cinema.svg)]" />
    <Item title="World-Class Wellness & Spa" img="bg-[url(/images/spa.svg)]" />
  </div>

  {/* Second Row with 2 Cards, Centered */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-8 justify-items-center mt-8">
    <Item title="Business Lounge & Co-Working Spaces" img="bg-[url(/images/business.png)]" />
    <Item title="Fine Dining & Private Owner’s Lounge" img="bg-[url(/images/spa2.png)]" />
  </div>
</div>


      {/* Explore Amenities Button */}
      <div className="flex justify-center mt-8 sm:mt-10">
        <Button
          className="bg-[#0F57D1] px-5 py-2 sm:px-6 sm:py-3 text-white text-[14px] sm:text-[16px] rounded-lg shadow-md hover:bg-[#0C47A0]"
          onClick={handleOnClick}
        >
          Explore Amenities
        </Button>
      </div>
    </div>
  );
};

export default Amenities;
