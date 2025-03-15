"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

import BottomBorderImg from "../../../assets/images/luxury-txt-border (2).png";
import WhyInvestImg from "../../../assets/images/invest-desk.png";

const Invest = () => {
  const handleOnClick = () => {
    const getInTouch = document.getElementById("getInTouch");
    if (getInTouch) {
      getInTouch.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="py-10 lg:py-[100px]" id="whyInvest">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section - Text Content */}
        <div className="w-full lg:w-[50%] px-4 lg:px-9 lg:pl-[100px] lg:ml-[30px] mt-20 lg:mt-32 mb-10 lg:mb-12">
          <div className="flex flex-col items-start text-left">
            <Image src={BottomBorderImg} width={283} height={35} alt="border" className="mb-[16px]" />
            <p className="text-[24px] lg:text-[32px] font-medium">Exclusive Limited-Time Offer —</p>
            <p className="text-[24px] lg:text-[32px] font-medium">
              Valid Until March <span className="font-bold">31, 2025</span>
            </p>
            <div className="mt-6 w-full">
              <p className="text-[18px] lg:text-[22px] font-medium">Own a Luxury Canal-Facing Residence</p>
              <p className="text-[18px] lg:text-[22px] font-medium">
                with a <span className="font-bold">40/60</span> Payment Plan
              </p>
              <div className="mt-8 space-y-6">
                {[
                  { text: "20% Down Payment", bold: "20%" },
                  { text: "5% Every 6 Months", bold: "5%" },
                  { text: "60% on Completion (Q4 2027)", bold: "60%" },
                  { text: "Offer Valid Until March 31, 2025", bold: "March 31, 2025" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <Image src="/bullet.png" alt="Bullet Point" width={24} height={24} className="flex-shrink-0" />
                    <p className="ml-4 text-[16px] lg:text-[18px]">
                      <span className="font-bold">{item.bold}</span> {item.text.replace(item.bold, "")}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-[16px] lg:text-[18px]">
                A Limited collection of Residences available <br /> for a short time.
              </p>
              <div className="flex justify-start mt-8">
                <Button className="bg-[#0F57D1] rounded-[4px] text-white px-[24px] py-[12px] text-[16px]" onClick={handleOnClick}>
                  Claim Your Exclusive Offer
                </Button>
              </div>
            </div>
          </div>
        </div>

       {/* Right Section - Image */}
<div className="w-full lg:w-[60%] flex justify-end">
  <Image
    src={WhyInvestImg}
    width={833}
    height={921}
    alt="invest"
    className="w-[700px] lg:h-[921px] h-[700px] object-cover"
  />
</div>

      </div>
    </div>
  );
};

export default Invest;
