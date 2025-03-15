"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import BottomBorderImg from "../../../assets/images/luxury-txt-border (2).png";

interface ResidenceOption {
  type: string;
  size: string;
  sizeNum: number;
  price: string;
}

const LuxuryResidences: React.FC = () => {
  const residenceOptions: ResidenceOption[] = [
    { type: "1 Bedroom", size: "1,106 sq. ft.", sizeNum: 1106, price: "7.49 Cr" },
    { type: "2 Bedroom", size: "2,075 sq. ft.", sizeNum: 2075, price: "11.94 Cr" },
    { type: "3 Bedroom", size: "2,779 sq. ft.", sizeNum: 2779, price: "20.46 Cr" },
    { type: "4 Bedroom", size: "4,606 sq. ft.", sizeNum: 4606, price: "35.88 Cr" },
    { type: "5 Bedroom", size: "19,637 sq. ft.", sizeNum: 19637, price: "On Request" },
  ];

  const handleOnClick = () => {
    const whyInvest = document.getElementById("whyInvest");
    if (whyInvest) {
      whyInvest.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center max-w-9xl mx-auto px-0 py-10 md:py-16 text-center md:text-left gap-8">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-start md:pl-1">
        <Image
          src="/images/pricing.png"
          alt="Luxury Residential Tower"
          width={600}
          height={300}
          className="rounded-lg w-full max-w-[500px] md:max-w-[600px] md:h-auto h-[250px] object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start px-4 md:px-0">
        <h2 className="text-2xl md:text-3xl font-light mb-4">Residences & Pricing</h2>
        <div className="flex justify-center md:justify-start mb-6">
          <Image src={BottomBorderImg} width={283} height={35} alt="border" />
        </div>
        <p className="mb-6 text-base md:text-lg">
          A limited collection of <span className="font-semibold">Exclusive Homes</span>, each crafted to perfection.
        </p>

        {/* Pricing Table */}
        <div className="overflow-x-auto w-full">
          <table className="w-full border-collapse text-center md:text-left text-sm md:text-base">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="py-2">Residence Type</th>
                <th className="py-2">Size (sq.ft.)</th>
                <th className="py-2">Starting Price (INR)</th>
              </tr>
            </thead>
            <tbody>
              {residenceOptions.map((option, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="py-3">{option.type}</td>
                  <td className="py-3">{option.size}</td>
                  <td className="py-3">{option.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA Button */}
        <div className="mt-6">
          <Button
            className="bg-[#0F57D1] rounded-md text-white px-6 py-3 text-sm md:text-base"
            onClick={handleOnClick}
          >
            Access Exclusive Price Lists & Offers
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LuxuryResidences;
