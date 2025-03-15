"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import BottomBorderImg from "../../../assets/images/luxury-txt-border (2).png";

const Item = ({ img, title }: { img: string; title: string }) => {
  return (
    <div className="min-w-[308px] h-[269px] rounded-[26px] border border-[#0F57D1] flex items-center justify-center mr-10">
      <div
        className={cn(
          "h-[226px] w-[259px] rounded-[26px] flex items-end pb-4 px-7 bg-no-repeat bg-cover",
          img
        )}
      >
        <p className="text-[20px] text-white text-center">{title}</p>
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
    <div>
      <div className="py-10 w-full h-[523px] bg-[url(/images/amenities-mobile-bg.png)] lg:bg-[url(/images/amenities-desk.png)] bg-center bg-no-repeat bg-cover">
        <div className="px-10 flex flex-col h-full items-center justify-center text-white lg:text-[32px]">
          <p>Amenities of the Project</p>
          <Image
            src={BottomBorderImg}
            width={191}
            height={35}
            alt="border"
            className="my-[14px] mx-auto"
          />
          <p className="text-sm text-center lg:text-[16px]">
            At Marriott Residences, luxury is not just a promise—it&apos;s a
            lifestyle.
          </p>
        </div>
      </div>
      <div
        className="lg:grid lg:grid-cols-3 flex items-center overflow-x-scroll gap-y-[30px] justify-items-center mt-20 w-full pl-[34px] lg:pl-0"
        id="gallery"
      >
        <Item
          title="Swimming Pool & Skyline Views"
          img="bg-[url(/images/swimming.png)]"
        />
        <Item
          title="State-of-the-Art Fitness Center & Sports Facilities"
          img="bg-[url(/images/fitness.png)]"
        />
        <Item title="Wellness & Spa Retreats" img="bg-[url(/images/spa.png)]" />
        <Item
          title="Fine Dining & Private Lounges"
          img="bg-[url(/images/dining.png)]"
        />
        <Item
          title="Business & Co-Working Spaces"
          img="bg-[url(/images/business.png)]"
        />
        <Item
          title="24/7 Concierge & Personalized Services"
          img="bg-[url(/images/personal.png)]"
        />
      </div>
      <div className="flex justify-center mt-[50px]">
        <Button
          className="bg-[#0F57D1] p-[31px] text-white hover:bg-[#0F57D1] text-base"
          onClick={handleOnClick}
        >
          Explore Amenities
        </Button>
      </div>
    </div>
  );
};

export default Amenities;