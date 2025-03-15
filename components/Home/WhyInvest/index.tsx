"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

import BottomBorderImg from "../../../assets/images/luxury-txt-border (2).png";
import WhyInvestImg from "../../../assets/images/why-invest-desk.png";
import ArrowDownBlue from "../../../assets/svg/arrow-down-blue.svg";
import ArrowRightBlue from "../../../assets/svg/arrow-right-blue.svg";

const investmentDetails = [
  {
    title: "Branded Residences",
    content: ["Managed by Fairmont", "Globally recognized hospitality leader"],
  },
  {
    title: "Prime Downtown Location",
    content: [
      "Located in the heart of downtown Dubai",
      "Close to Dubai Mall, Burj Khalifa, and Dubai Opera",
    ],
  },
  {
    title: "High ROI & Capital Appreciation",
    content: ["Potential for significant returns", "Strong capital growth"],
  },
  {
    title: "Limited Collection",
    content: ["Exclusive and prestigious", "Limited availability increases value"],
  },
  {
    title: "Flexible Payment Plan",
    content: ["Tailored payment options", "Ease of investment planning"],
  },
];

const WhyInvest = () => {
  const [expandedItems, setExpandedItems] = useState<{ [key: number]: boolean }>({});

  const toggleItem = (index: number) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleOnClick = () => {
    const getInTouch = document.getElementById("getInTouch");
    if (getInTouch) {
      getInTouch.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="py-10 lg:py-[100px] text-center" id="whyInvest">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full">
        <div className="mt-10 px-6 lg:px-9 order-2 lg:order-1 w-full max-w-[800px]">
          <p className="text-[20px] lg:text-[32px] font-semibold">
            Why Invest in Fairmont <br /> Residences Solara Tower?
          </p>
          <Image
            src={BottomBorderImg}
            width={191}
            height={35}
            alt="border"
            className="my-[14px] mx-auto"
          />
          <div className="mt-6">
            {investmentDetails.map((item, index) => (
              <div key={index} className="mb-3">
                <div
                  className="flex items-center justify-center cursor-pointer"
                  onClick={() => toggleItem(index)}
                >
                  <Image
                    src={expandedItems[index] ? ArrowDownBlue : ArrowRightBlue}
                    width={14}
                    height={14}
                    alt="arrow-icon"
                    className="w-[14px] h-[14px] lg:w-6 lg:h-6 object-cover"
                  />
                  <p className="text-sm lg:text-[24px] ml-[5px] font-medium">{item.title}</p>
                </div>
                {expandedItems[index] && (
                  <div className="w-full text-xs lg:text-base mt-2">
                    {item.content.map((point, i) => (
                      <p key={i}>&bull; {point}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex justify-center mt-10">
              <Button
                className="bg-[#0F57D1] rounded-[4px] text-white px-[18px] py-[10px] text-xs lg:text-base"
                onClick={handleOnClick}
              >
                Invest with Us & Be Driven by Excellence
              </Button>
            </div>
          </div>
        </div>
        <Image
          src={WhyInvestImg}
          width={700}
          height={600}
          alt="invest"
          className="w-full max-w-[700px] h-auto object-cover order-1 lg:order-2"
        />
      </div>
    </div>
  );
};

export default WhyInvest;
