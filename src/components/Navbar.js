import { Button } from "@chakra-ui/react";
import React from "react";
import { FcDonate } from "react-icons/fc";
import { Link } from "react-router-dom";
// import logoWithoutBg from "../assets/logos/WWE_withoutbg.png";
import logoWithBg from "../assets/logos/WWE_withbg.png";

export default function Navbar() {
  return (
    <div className="sticky top-0 left-0 w-full min-h-[10%] border-b-2 border-white flex items-center justify-between shadow-slate-500 shadow-md bg-pink-600 z-10">
      <Link to="/">
        <img src={logoWithBg} alt="logo" className="w-20 my-1 mx-3 rounded" />
      </Link>
      <div className="flex items-center pr-4">
        <Link to="/">
          <p className="text-lg text-white font-semibold hover:underline hover:cursor-pointer mx-2">
            Home
          </p>
        </Link>
        <Link to="/about">
          <p className="text-lg text-white font-semibold hover:underline hover:cursor-pointer mx-2">
            About Us
          </p>
        </Link>
        <Link to="/getinvolved">
          <p className="text-lg text-white font-semibold hover:underline hover:cursor-pointer mx-2">
            Get Involved
          </p>
        </Link>
        <Link to="/ourworks">
          <p className="text-lg text-white font-semibold hover:underline hover:cursor-pointer mx-2">
            Our Works
          </p>
        </Link>
        <Link to="/contact">
          <p className="text-lg text-white font-semibold hover:underline hover:cursor-pointer mx-2">
            Contact Us
          </p>
        </Link>
        <Link to="/contribute">
          <Button
            rightIcon={<FcDonate />}
            colorScheme="purple"
            variant="solid"
            className="mx-3"
          >
            Contribute
          </Button>
        </Link>
      </div>
    </div>
  );
}
