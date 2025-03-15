"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { sendMail } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import CircleOne from "../../../assets/images/circle-one.png";
import CircleTwo from "../../../assets/images/circle-two.png";
import GetInTouchImg from "../../../assets/images/get-in-touch.png";
import CallWhite from "../../../assets/svg/call-white.svg";
import LocationWhite from "../../../assets/svg/location-white.svg";
import MailWhite from "../../../assets/svg/mail-white.svg";

const GetInTouchDesk = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const [purchaseIntent, setPurchaseIntent] = useState({
    secondaryHome: false,
    investment: false,
    budget8_11: false,
    budget11_15: false,
    budget15_20: false,
    budget20_25: false,
  });

  const handlePurchaseIntentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPurchaseIntent({
      ...purchaseIntent,
      [e.target.name]: e.target.checked,
    });
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const handleSendMsg = async () => {
    if (!captchaValue) {
      return alert("Please verify the reCAPTCHA");
    }
    if (number.length !== 12) {
      return alert("Please enter a valid number");
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
      alert("Form submitted successfully!");
    } else {
      alert("Could not submit your details");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 p-80px">
      <div className="w-full lg:w-[591px] bg-black p-12 rounded-[10px] relative overflow-hidden text-white">
        <p className="text-2xl font-bold">Get in Touch</p>
        <p className="text-base text-gray-400 mt-">Share your details to own a property in Downtown Dubai’s most prestigious address.</p>

        <div className="mt-10 space-y-6">
          <div className="flex items-center gap-4">
            <Image src={CallWhite} width={24} height={24} alt="call" />
            <p>+91-7981135665</p>
          </div>

          <div className="flex items-center gap-4">
            <Image src={MailWhite} width={24} height={24} alt="mail" />
            <p>suleman@drivenproperties.com</p>
          </div>

          <div className="flex items-start gap-4">
            <Image src={LocationWhite} width={24} height={24} alt="location" />
            <p>
              1st Floor, Rajapushpa Summit<br />
              Nanakramguda, Hyderabad,<br />
              Telangana, India
            </p>
          </div>
        </div>

        <Image src={CircleOne} width={138} height={138} alt="circle" className="absolute right-16 bottom-16 z-10" />
        <Image src={CircleTwo} width={180} height={180} alt="circle" className="absolute right-0 bottom-0" />
      </div>

      <div className="w-full lg:w-[50%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm">Full Name:</p>
            <Input placeholder="John Doe" className="border-b border-gray-400 rounded-none focus:ring-0" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div>
            <p className="text-sm">Phone Number:</p>
            <Input placeholder="+91234567823" className="border-b border-gray-400 rounded-none focus:ring-0" type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
          </div>
        </div>

        <div className="mt-6">
          <p className="text-sm">Email:</p>
          <Input placeholder="johndoe@gmail.com" className="border-b border-gray-400 rounded-none focus:ring-0" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="mt-6">
          <p className="text-sm">Intent of Purchase:</p>
          <div className="flex gap-4 mt-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" name="secondaryHome" checked={purchaseIntent.secondaryHome} onChange={handlePurchaseIntentChange} />
              Secondary Home
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="investment" checked={purchaseIntent.investment} onChange={handlePurchaseIntentChange} />
              Investment
            </label>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-sm">Budget:</p>
          <div className="grid grid-cols-2 gap-4">
            {["8_11", "11_15", "15_20", "20_25"].map((key) => (
              <label key={key} className="flex items-center gap-2">
                <input type="checkbox" name={`budget${key}`} checked={purchaseIntent[`budget${key}` as keyof typeof purchaseIntent]} onChange={handlePurchaseIntentChange} />
                INR {key.replace("_", "-")} Cr
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-6 gap-4">
          <ReCAPTCHA sitekey="6LeRXPQqAAAAAOIKtdCdIq_GqOfiCtfA7bC-TpFP" onChange={handleCaptchaChange} />
          <Button className="bg-blue-600 text-white px-6 py-3 rounded-md" onClick={handleSendMsg}>
            Register Your Interest Now
          </Button>
        </div>

        <div className="flex justify-center mt-6">
          <Image src={GetInTouchImg} width={240} height={112} alt="get-in-touch" />
        </div>
      </div>
    </div>
  );
};

export default GetInTouchDesk;