import Image from "next/image";
import Facebook from "../../assets/images/facebook.png";
import Insta from "../../assets/images/insta.png";
import LinkedIn from "../../assets/images/linkedin.png";
import Logo from "../../assets/images/logo-desk.png";
import MapLocation from "../../assets/images/map-location.png";
import Twitter from "../../assets/images/twitter.png";
import Youtube from "../../assets/images/youtube.png";
import CallWhite from "../../assets/svg/call-white.svg";
import LocationWhite from "../../assets/svg/location-white.svg";
import MailWhite from "../../assets/svg/mail-white.svg";

const Footer: React.FC = () => {
  return (
    <div className="mt-30 text-white relative w-full">
      {/* Logo Positioned Completely Above Black Background */}
      <div className="absolute top-[-80px] left-1/2 transform -translate-x-1/2 bg-transparent z-10">
        <Image
          src={Logo}
          width={200}
          height={50}
          alt="Driven Properties Logo"
          className="object-contain"
        />
      </div>

      {/* Black Background Section */}
      <div className="bg-black text-white w-full min-h-[250px] flex flex-col justify-center items-center pt-10 pb-0">
        <div className="flex flex-col lg:flex-row justify-between items-start w-full max-w-7xl px-5 lg:px-16 gap-12">
          {/* Left: Contact Information */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <p className="text-xl font-semibold">Reach Us</p>

            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <Image src={CallWhite} width={22} height={22} alt="call" />
              <p className="text-base lg:text-lg">+91-7981135665</p>
            </div>

            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <Image src={MailWhite} width={22} height={22} alt="mail" />
              <p className="text-base lg:text-lg">suleman@drivenproperties.com</p>
            </div>

            <div className="flex items-start gap-4 justify-center lg:justify-start">
              <Image src={LocationWhite} width={22} height={22} alt="location" />
              <p className="text-base lg:text-lg">
                1st Floor, Rajapushpa Summit, <br />
                Nanakramguda, Hyderabad, Telangana, India
              </p>
            </div>
          </div>

          {/* Right: Map Location */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
            <div
              onClick={() =>
                window.open(
                  "https://maps.app.goo.gl/VAfPGdgxhQdnSqFaA?g_st=aw",
                  "_blank"
                )
              }
              className="cursor-pointer hover:opacity-90 transition-opacity"
            >
              <Image
                src={MapLocation}
                width={300}
                height={300}
                alt="map"
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Follow Us Section */}
        <div className="w-full border-t border-gray-900 mt-5 pt-6 flex flex-col items-center">
          <p className="text-lg font-medium">Follow Us</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center items-center gap-6 mt-4">
          {[
            { src: Youtube, link: "https://www.youtube.com/channel/UC9SHhB8dKTIzeX2-vX-2ykQ" },
            { src: Insta, link: "https://www.instagram.com/drivenproperties/" },
            { src: Twitter, link: "https://twitter.com/drivenre" },
            { src: Facebook, link: "https://www.facebook.com/DrivenPropertiesDubai/" },
            { src: LinkedIn, link: "https://www.linkedin.com/company/driven-properties-real-estate/" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src={social.src}
                width={30}
                height={30}
                alt={`social-icon-${index}`}
                className="cursor-pointer"
              />
            </a>
          ))}
        </div>

        {/* Footer Note */}
        <div className="w-full bg-black text-center py-6 mt-6">
          <p className="text-sm lg:text-base">
            Designed by TechGy Innovations 2025. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
