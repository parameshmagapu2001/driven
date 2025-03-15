"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { sendMail } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

import CircleOne from "../../../assets/images/circle-one.png";
import CircleTwo from "../../../assets/images/circle-two.png";
import GetInTouchImg from "../../../assets/images/get-in-touch.png";
import CallWhite from "../../../assets/svg/call-white.svg";
import LocationWhite from "../../../assets/svg/location-white.svg";
import MailWhite from "../../../assets/svg/mail-white.svg";

const GetInTouchDesk = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    number: "",
    purchaseIntent: {
      secondaryHome: false,
      investment: false,
      budget: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        purchaseIntent: {
          ...prev.purchaseIntent,
          [name]: (e.target as HTMLInputElement).checked,
        },
      }));
    } else if (name === "budget") {
      setFormData((prev) => ({
        ...prev,
        purchaseIntent: {
          ...prev.purchaseIntent,
          budget: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSendMsg = async () => {
    const { firstName, email, number } = formData;
    if (!firstName || !email || number.length < 10) {
      return alert("Please fill all fields correctly.");
    }

    const res = await sendMail({ firstName, email, number });

    if (res) {
      setFormData({
        firstName: "",
        email: "",
        number: "",
        purchaseIntent: { secondaryHome: false, investment: false, budget: "" },
      });
      alert("Form submitted successfully!");
    } else {
      alert("Could not submit your details");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 p-10">
      {/* Contact Information */}
      <div className="w-full lg:w-[591px] bg-black p-12 rounded-lg text-white relative overflow-hidden">
        <p className="text-2xl font-bold">Get in Touch</p>
        <p className="text-base text-gray-400 mt-2">
          Share your details to own a property in Downtown Dubai’s most prestigious address.
        </p>

        <div className="mt-6 space-y-4">
          {[
            { img: CallWhite, text: "+91-7981135665" },
            { img: MailWhite, text: "suleman@drivenproperties.com" },
            { img: LocationWhite, text: "1st Floor, Rajapushpa Summit, Hyderabad, India" },
          ].map(({ img, text }, index) => (
            <div key={index} className="flex items-center gap-4">
              <Image src={img} width={24} height={24} alt="icon" />
              <p>{text}</p>
            </div>
          ))}
        </div>

        <Image src={CircleOne} width={138} height={138} alt="circle" className="absolute right-16 bottom-16" />
        <Image src={CircleTwo} width={180} height={180} alt="circle" className="absolute right-0 bottom-0" />
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { label: "Full Name", name: "firstName", placeholder: "John Doe" },
            { label: "Phone Number", name: "number", placeholder: "+91234567823", type: "text" },
          ].map(({ label, name, placeholder, type = "text" }) => (
            <div key={name}>
              <p className="text-sm">{label}:</p>
              <Input
                placeholder={placeholder}
                className="border-b border-gray-400 rounded-none focus:ring-0"
                type={type}
                name={name}
                value={formData[name as keyof typeof formData] as string}
                onChange={handleChange}
              />
            </div>
          ))}
        </div>

        <div className="mt-6">
          <p className="text-sm">Email:</p>
          <Input
            placeholder="johndoe@gmail.com"
            className="border-b border-gray-400 rounded-none focus:ring-0"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mt-6">
          <p className="text-sm">Intent of Purchase:</p>
          <div className="flex gap-4 mt-2">
            {["secondaryHome", "investment"].map((key) => (
              <label key={key} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name={key}
                  checked={formData.purchaseIntent[key as keyof typeof formData.purchaseIntent] as boolean}
                  onChange={handleChange}
                />
                {key === "secondaryHome" ? "Secondary Home" : "Investment"}
              </label>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <p className="text-sm">Budget:</p>
          <select
            name="budget"
            value={formData.purchaseIntent.budget}
            onChange={handleChange}
            className="w-full border border-gray-400 rounded p-2"
          >
            <option value="">Select Budget</option>
            {[
              ["8_11", "INR 8-11 Cr"],
              ["11_15", "INR 11-15 Cr"],
              ["15_20", "INR 15-20 Cr"],
              ["20_25", "INR 20-25 Cr"],
            ].map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-6 gap-4">
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
