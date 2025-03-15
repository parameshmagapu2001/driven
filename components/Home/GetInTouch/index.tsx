"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { sendMail } from "@/lib/utils";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";
import GetInTouchImg from "../../../assets/images/get-in-touch.png";
import BottomBorderImg from "../../../assets/images/luxury-txt-border (2).png";
import GetInTouchDesk from "./GetInTouchDesk";

const GetInTouch: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const [purchaseIntent, setPurchaseIntent] = useState({
    secondaryHome: false,
    investment: false,
  });

  const [budget, setBudget] = useState({
    "7-10cr": false,
    "11-20cr": false,
    "20-30cr": false,
    "30cr+": false,
  });

  const handlePurchaseIntentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPurchaseIntent({ ...purchaseIntent, [e.target.name]: e.target.checked });
  };

  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget({ ...budget, [e.target.name]: e.target.checked });
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const handleSendMsg = async () => {
    if (number.length !== 12) {
      alert("Please enter a valid phone number");
      return;
    }

    if (!captchaValue) {
      alert("Please complete the CAPTCHA");
      return;
    }

    const res = await sendMail({
      firstName,
      email,
      number,
    });

    if (res) {
      setFirstName("");
      setEmail("");
      setNumber("");
      setPurchaseIntent({ secondaryHome: false, investment: false });
      setBudget({ "7-10cr": false, "11-20cr": false, "20-30cr": false, "30cr+": false });
    } else {
      alert("Could not submit your details");
    }
  };

  return (
    <div className="py-10 px-5" id="getInTouch">
      <p className="text-[20px] lg:text-[32px] text-center">
        Secure Your Exclusive Residence - Register Your Interest
      </p>
      <Image src={BottomBorderImg} width={191} height={35} alt="border" className="my-[14px] mx-auto" />

      {/* Mobile View */}
      <div className="block lg:hidden">
        <p className="text-[18px] leading-5 mb-1">Get in Touch</p>
        <p className="text-xs">Share your details to know more...</p>

        <div className="mt-5">
          {/* Full Name & Phone Number */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs leading-5">Full Name</p>
              <Input
                placeholder="John Doe"
                className="w-[157px] border-0 border-b border-b-[#8D8D8D] rounded-none focus-visible:ring-0"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <p className="text-xs leading-5">Phone Number</p>
              <Input
                placeholder="+91234567823"
                className="w-[157px] border-0 border-b border-b-[#8D8D8D] rounded-none focus-visible:ring-0"
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="mt-5">
            <p className="text-xs leading-5">Email:</p>
            <Input
              placeholder="johndoe@gmail.com"
              className="w-full border-0 border-b border-b-[#8D8D8D] rounded-none focus-visible:ring-0"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Intent of Purchase & Budget - Now Side by Side */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mt-5">
            
            {/* Intent of Purchase */}
            <div className="w-full lg:w-1/2">
              <p className="text-xs leading-5">Intent of Purchase:</p>
              <div className="flex flex-wrap gap-3 mt-1">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="secondaryHome"
                    className="w-4 h-4 border border-gray-400 rounded"
                    checked={purchaseIntent.secondaryHome}
                    onChange={handlePurchaseIntentChange}
                  />
                  <span className="text-sm text-gray-700">Secondary Home</span>
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="investment"
                    className="w-4 h-4 border border-gray-400 rounded"
                    checked={purchaseIntent.investment}
                    onChange={handlePurchaseIntentChange}
                  />
                  <span className="text-sm text-gray-700">Investment</span>
                </label>
              </div>
            </div>

            {/* Budget */}
            <div className="w-full lg:w-1/2">
              <p className="text-xs leading-5">Budget:</p>
              <div className="flex flex-wrap gap-3 mt-1">
                {["7-10cr", "11-20cr", "20-30cr", "30cr+"].map((range) => (
                 <label key={range} className="flex items-center gap-2">
                 <input
                   type="checkbox"
                   name={range}
                   className="w-4 h-4 border border-gray-400 rounded"
                   checked={budget[range as keyof typeof budget]}  // ✅ Fix applied
                   onChange={handleBudgetChange}
                 />
                 <span className="text-sm text-gray-700">INR {range}</span>
               </label>
               
                ))}
              </div>
            </div>
          </div>

          {/* Submit Button with ReCAPTCHA Above */}
          <div className="flex flex-col items-center justify-center mt-10">
            {/* ReCAPTCHA - Positioned Above the Button */}
            <ReCAPTCHA 
              sitekey="6LeRXPQqAAAAAOIKtdCdIq_GqOfiCtfA7bC-TpFP" 
              onChange={handleCaptchaChange} 
            />

            {/* Register Button */}
            <Button
              className="bg-[#0F57D1] rounded-[4px] text-white px-[18px] py-[10px] text-xs w-auto mt-4"
              onClick={handleSendMsg}
            >
              Register Your Interest Now
            </Button>

            <Image 
              src={GetInTouchImg} 
              width={112} 
              height={52} 
              alt="get-in-touch" 
              className="-ml-20 -mt-3" 
            />
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block">
        <GetInTouchDesk />
      </div>
    </div>
  );
};

export default GetInTouch;