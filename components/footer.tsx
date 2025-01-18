import Link from "next/link";
import React from "react";
import { FaViber } from "react-icons/fa6";
import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiTelegramFill,
  RiWechat2Fill,
  RiWhatsappFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-neutral-900">
      <div className="container mx-auto max-w-7xl px-6 py-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
          {/* About Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">
              EMBALMERS’ UNMASKED THE TRUTH BEHIND THEIR PROFESSION
            </h2>
            <p className="text-sm text-gray-600">
              Though society whispers of what they don’t know, embalmers bring
              light where the dark feelings grow. With respect for the fallen
              and love for their art, they shatter the stigma and heal every
              heart.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 flex justify-end md:justify-end items-start">
            <div className="text-left">
              <h2 className="text-lg font-bold mb-4">References</h2>
              <div className="flex flex-col gap-4">
                <ul className="text-sm max-w-xl break-words text-gray-600 list-disc">
                  <li>
                    <Link className="hover:text-blue-600" href="/">
                      https://blogs.funerallink.com.ph/how-to-be-a-licensed-embalmer-in-the-philippines/
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-blue-600" href="/about">
                      https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/10/48704#:~:text=3.1.1b%20Update%20their%20knowledge,in%20embalming%20of%20remains;%20and
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-blue-600" href="/properties">
                      https://www.academia.edu/74067725/Dead_Bodies_that_Matter_A_Consensual_Qualitative_Research_on_the_Lived_Experience_of_Embalmers
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-blue-600" href="/listings">
                      https://doi.org/10.1016/B978-0-12-386456-7.06704-6
                    </Link>
                  </li>
                  {/* New References */}
                  <li>
                    <Link
                      className="hover:text-blue-600"
                      href="https://www.purereflections.ie/post/explanation-of-the-embalming-process"
                    >
                      https://www.purereflections.ie/post/explanation-of-the-embalming-process
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-blue-600"
                      href="https://www.onlinedegree.com/careers/trade/embalmer/"
                    >
                      https://www.onlinedegree.com/careers/trade/embalmer/
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-blue-600"
                      href="https://www.ziprecruiter.com/career/Embalmer/What-Is-How-to-Become"
                    >
                      https://www.ziprecruiter.com/career/Embalmer/What-Is-How-to-Become
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-blue-600"
                      href="https://www.serenitycasket.com.sg/embalmer-frequently-asked-questions/"
                    >
                      https://www.serenitycasket.com.sg/embalmer-frequently-asked-questions/
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-300 my-6" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            <p>Create and Design by: Giolo Evora</p>
          </p>
          <div className="flex gap-1">
            <Link
              aria-label="Facebook"
              className="text-gray-500 hover:text-blue-600"
              href="https://www.facebook.com/share/15aXFZR55V/?mibextid=wwXIfr"
            >
              <RiFacebookBoxFill className="h-6 w-6" />
            </Link>
            <button
              aria-label="Instagram"
              className="text-gray-500 hover:text-pink-600"
              onClick={() => {}}
            >
              <RiInstagramFill className="h-6 w-6" />
            </button>

            <Link
              aria-label="Telegram"
              className="text-gray-500 hover:text-blue-500"
              href="https://t.me/+639914401097"
            >
              <RiTelegramFill className="h-6 w-6" />
            </Link>

            <Link
              aria-label="WhatsApp"
              className="text-gray-500 hover:text-green-500"
              href="https://wa.me/639914401097"
            >
              <RiWhatsappFill className="h-6 w-6" />
            </Link>

            <Link
              aria-label="WeChat"
              className="text-gray-500 hover:text-green-600"
              href="weixin://dl/chat?token=YOUR_TOKEN"
            >
              <RiWechat2Fill className="h-6 w-6" />
            </Link>

            <Link
              aria-label="Viber"
              className="text-gray-500 hover:text-purple-600"
              href="viber://chat?number=%2B639914401097"
            >
              <FaViber className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
