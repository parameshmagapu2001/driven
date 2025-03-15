"use client";
import Image from "next/image";
import LogoDesk from "../../assets/images/logo-desk.png";
import CallWhiteIcon from "../../assets/svg/call-white.svg";
import { Button } from "../ui/button";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const onItemClick = (
    item: "home" | "experience" | "location" | "highlights" | "whyInvest"
  ) => {
    const el = document.getElementById(item);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleOnContact = () => {
    const getInTouch = document.getElementById("getInTouch");
    if (getInTouch) getInTouch.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="p-5 bg-white flex flex-row items-center justify-between shadow-md">
      <div className="flex flex-row items-center">
        <div className="block lg:hidden">
          <MobileNav />
        </div>
        <Image
          src={LogoDesk}
          width={186}
          height={49}
          alt="logo"
          className="w-[150px] h-[30px] lg:w-[250px] lg:h-[80px] object-contain -ml-10 lg:-ml-0"
        />
      </div>
      <div className="hidden lg:flex items-center">
        <div className="flex items-center gap-10 text-[16px] text-[#8A8A8A]">
          {["home", "experience", "location", "highlights", "whyInvest"].map(
            (item, index) => (
              <p
                key={index}
                className="cursor-pointer pb-[14px] hover:text-[#0F57D1] transition"
                onClick={() => onItemClick(item as any)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </p>
            )
          )}
        </div>
        <Button
          className="bg-[#0F57D1] w-[154px] h-[45px] ml-12 mb-[14px] flex items-center gap-2"
          onClick={handleOnContact}
        >
          <Image src={CallWhiteIcon} width={16} height={16} alt="call-white" />
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
