import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="w-full bg-gray-100 py-8">
      <div className="max-w-[1240px] mx-auto flex flex-col">
        <div className="sm:flex text-center justify-between items-center">
          <p className="text-xl">Waves Women Empowerment</p>
          <div className="flex justify-between w-full sm:max-w-[280px] mt-6">
            <FaFacebook className="hover:text-blue-700 hover:cursor-pointer text-3xl" />
            <FaTwitter className="hover:text-blue-400 hover:cursor-pointer text-3xl" />
            <FaInstagram className="hover:text-pink-400 hover:cursor-pointer text-3xl" />
            <AiFillLinkedin className="hover:text-blue-500 hover:cursor-pointer text-3xl" />
            <FaYoutube className="hover:text-red-500 hover:cursor-pointer text-3xl" />
          </div>
        </div>
        <div className="flex justify-between">
          <ul className="text-right lg:flex">
            <li className="mr-4">About</li>
            <li className="mr-4">Get Involved</li>
            <li className="mr-4">Our Works</li>
            <li className="mr-4">Contact Us</li>
            <li className="mr-4">Contribute</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
