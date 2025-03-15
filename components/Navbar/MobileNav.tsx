"use client";
import Image from "next/image";
import { useState } from "react";
import HamburgerIcon from "../../assets/svg/hamburger.svg";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";

const MobileNav = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const onItemClick = (
    item: "home" | "experience" | "location" | "highlights" | "whyInvest"
  ) => {
    setIsDrawerOpen(false);

    setTimeout(() => {
      const el = document.getElementById(item);

      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 500);
  };

  return (
    <Drawer
      direction="left"
      open={isDrawerOpen}
      onClose={() => setIsDrawerOpen(false)}
    >
      <DrawerTrigger asChild onClick={() => setIsDrawerOpen(true)}>
        <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center cursor-pointer mr-[26px] lg:hidden">
          <Image src={HamburgerIcon} width={16} height={16} alt="menu" />
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className="flex flex-col p-5 gap-4">
          <p onClick={() => onItemClick("home")}>Home</p>
          <p onClick={() => onItemClick("experience")}>Experience</p>
          <p onClick={() => onItemClick("location")}>Location</p>
          <p onClick={() => onItemClick("highlights")}>Highlights</p>
          <p onClick={() => onItemClick("whyInvest")}>Why Invest?</p>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNav;
