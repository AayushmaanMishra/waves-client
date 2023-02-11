import { Button } from "@chakra-ui/react";
import React from "react";
import { FcDonate } from "react-icons/fc";
import { Link } from "react-router-dom";
import logoWithoutBg from "../assets/logos/WWE_withoutbg.png";

export default function Navbar() {
  return (
    <div className="sticky top-0 left-0 w-full min-h-[10%] border-b-2 border-pink-500 flex items-center justify-between shadow-slate-500 shadow-md">
      <Link to="/">
        <img src={logoWithoutBg} alt="logo" className="w-20 my-1 mx-3" />
      </Link>
      <div className="flex items-center pr-4">
        <Link to="/">
          <p className="text-lg text-pink-600 font-semibold hover:underline hover:cursor-pointer mx-2">
            Home
          </p>
        </Link>
        <Link to="/about">
          <p className="text-lg text-pink-600 font-semibold hover:underline hover:cursor-pointer mx-2">
            About Us
          </p>
        </Link>
        <Link to="/getinvolved">
          <p className="text-lg text-pink-600 font-semibold hover:underline hover:cursor-pointer mx-2">
            Get Involved
          </p>
        </Link>
        <Link to="/ourworks">
          <p className="text-lg text-pink-600 font-semibold hover:underline hover:cursor-pointer mx-2">
            Our Works
          </p>
        </Link>
        <Link to="/contact">
          <p className="text-lg text-pink-600 font-semibold hover:underline hover:cursor-pointer mx-2">
            Contact Us
          </p>
        </Link>
        <Link to="/contribute">
          <Button
            rightIcon={<FcDonate />}
            colorScheme="pink"
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
