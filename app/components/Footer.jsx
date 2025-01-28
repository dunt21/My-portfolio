import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={assets.logo} alt="logo" className="w-36 mx-auto mb-2" />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="logo"
            className="w-6 "
          />
          <a
            target="_blank"
            href="mailto:suadmacaulay50@gmail.com?subject=Hello&body=Your%20message%20here"
          >
            suadmacaulay50@gmail.com
          </a>
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Suad Macaulay. All rights reserved.</p>
        <ul className="mt-4 sm:mt-0 flex items-center justify-center gap-10 ">
          <li>
            <a target="_blank" href="https://github.com/dunt21">
              Github
            </a>
          </li>
          <li>
            <a target="_blank" href="https://x.com/moreofababe">
              Twitter
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/suad-macaulay-429070278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
