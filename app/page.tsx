"use client";
import FormModal from "@/components/Common/FormModal";
import Footer from "@/components/Footer";
import Amenities from "../components/Home/Amenities";
import GetInTouch from "@/components/Home/GetInTouch";
import Header from "@/components/Home/Header";
import Location from "@/components/Home/Location";
import LuxuryExclusivity from "@/components/Home/LuxuryExclusivity";
import LuxuryResidences from "@/components/Home/LuxuryResidences";
import WhyInvest from "@/components/Home/WhyInvest";
import Invest from "@/components/Home/invest";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local";
import { useEffect, useState } from "react";


const localFreightNeoPro = localFont({
  src: "../fonts/FreightNeo.otf",
  display: "auto",
  weight: "400",
  variable: "--font-freight-neo-pro",
});

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsModalOpen(true);
    }, 4000);
  }, []);

  return (
    <div className={localFreightNeoPro.className}>
      <Navbar />
      <Header />
      <LuxuryExclusivity />
      <Location />
      <Amenities />
      <WhyInvest />
      <LuxuryResidences />
      <Invest />
      <GetInTouch />
      <Footer />
      <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default HomePage;
