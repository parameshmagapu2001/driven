"use client";
import { sendMail } from "@/lib/utils";
import React, { useState } from "react";
import Modal from "react-responsive-modal";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const FormModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const handleSendMsg = async () => {
    if (!firstName || !email || !number) {
      return alert("Please enter all the fields");
    }

    if (number.length !== 12) {
      return alert("Please enter a valid number");
    }

    const res = await sendMail({
      firstName,
      // lastName,
      email,
      number,
      // message,
    });

    if (res) {
      setFirstName("");
      // setLastName("");
      setEmail("");
      setNumber("");
      // setMessage("");
      onClose();
    } else {
      alert("Could not submit your details");
    }
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      styles={{ modal: { borderRadius: 10 } }}
      center
      blockScroll
    >
      <div className="w-[300px] lg:w-[725px] bg-white relative px-[20px] lg:px-[65px] lg:py-[60px] py-5">
        {/* <Image
          src={ModalCloseIcon}
          width={30}
          height={30}
          alt="close"
          className="absolute right-[10px] top-[10px]"
        /> */}
        <div className="flex flex-col lg:flex-row items-center mb-5 lg:mb-10 justify-between">
          <div className="w-full lg:w-[45%]">
            <p className="text-xs leading-5">Full Name</p>
            <Input
              placeholder="John Doe"
              className="border-0 border-b border-b-[#8D8D8D] rounded-none focus-visible:ring-0"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="w-full lg:w-[45%] mt-5 lg:mt-0">
            <p className="text-xs leading-5">Phone Number</p>
            <Input
              placeholder="+91234567823"
              className="border-0 border-b border-b-[#8D8D8D] rounded-none focus-visible:ring-0"
              type="number"
              value={number}
              min={10}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
        </div>
        <div>
          <div>
            <p className="text-xs leading-5">Email</p>
            <Input
              placeholder="johndoe@gmail.com"
              className="border-0 border-b border-b-[#8D8D8D] rounded-none focus-visible:ring-0"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col items-end justify-center mt-10">
            <Button
              className="bg-[#0F57D1] rounded-[4px] text-white px-[18px] py-[10px] text-xs w-[98px]"
              onClick={handleSendMsg}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default FormModal;
