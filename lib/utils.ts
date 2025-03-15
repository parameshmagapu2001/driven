import axios from "axios";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const validateEmail = (email: string) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

export const sendMail = async ({
  firstName,
  // lastName,
  email,
  number,
}: // message,
{
  firstName: string;
  // lastName: string;
  email: string;
  number: string;
  // message: string;
}) => {
  try {
    if (!firstName || !email || !number) {
      return alert("Please enter the required fields");
    }

    if (!validateEmail(email)) {
      return alert("Please enter a valid email address");
    }

    await axios.get("https://send-mail-server-weld.vercel.app", {
      params: {
        name: `${firstName}`,
        email,
        phone: number,
        message: "",
        from: "suleman@drivenproperties.com",
        to: "suleman@drivenproperties.com",
      },
      headers: {
        Authorization:
          "e3187e5265d1e8a70048eaf7b761271ad914cd3832e5b24e1a08467336db30c8",
      },
    });

    return true;
  } catch (err) {
    console.log("ERROR: ", err);
    return false;
  }
};
