import { Button } from "@chakra-ui/react";
import React from "react";
import { AiFillLinkedin, AiOutlineClose } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FcDonate } from "react-icons/fc";
import { Link } from "react-router-dom";
import logoWithoutBg from "../../assets/logos/WWE_withoutbg.png";

export default function SmScreenNavbar({ setToggleNav, toggleNav }) {
  return (
    <div className="fixed top-0 left-0 z-10 w-full bg-white px-7 py-8">
      <div className="flex w-full items-center justify-between">
        <img src={logoWithoutBg} alt="logo" className="w-20" />
        <p className="text-lg font-serif">waveswomenempowerment.org</p>
        <AiOutlineClose
          className="text-2xl cursor-pointer mr-4 hover:text-gray-600"
          onClick={() => setToggleNav(!toggleNav)}
        />
      </div>
      <div className="flex flex-col items-center justify-evenly mb-5">
        <Link to="/" className="w-full">
          <Button
            fontSize="lg"
            colorScheme="purple"
            width="full"
            variant="ghost"
            my="5px"
            onClick={() => setToggleNav(!toggleNav)}
          >
            Home
          </Button>
        </Link>
        <Link to="/about" className="w-full">
          <Button
            fontSize="lg"
            colorScheme="purple"
            width="full"
            variant="ghost"
            my="5px"
            onClick={() => setToggleNav(!toggleNav)}
          >
            About Us
          </Button>
        </Link>
        <Link to="/getinvolved" className="w-full">
          <Button
            fontSize="lg"
            colorScheme="purple"
            width="full"
            variant="ghost"
            my="5px"
            onClick={() => setToggleNav(!toggleNav)}
          >
            Get Involved
          </Button>
        </Link>
        <Link to="/ourworks" className="w-full">
          <Button
            fontSize="lg"
            colorScheme="purple"
            width="full"
            variant="ghost"
            my="5px"
            onClick={() => setToggleNav(!toggleNav)}
          >
            Our Works
          </Button>
        </Link>
        <Link to="/contact" className="w-full">
          <Button
            fontSize="lg"
            colorScheme="purple"
            width="full"
            variant="ghost"
            my="5px"
            onClick={() => setToggleNav(!toggleNav)}
          >
            Contact Us
          </Button>
        </Link>
        <Link to="/contribute" className="w-full">
          <Button
            fontSize="lg"
            rightIcon={<FcDonate />}
            colorScheme="purple"
            width="full"
            variant="solid"
            my="5px"
            onClick={() => setToggleNav(!toggleNav)}
          >
            Contribute
          </Button>
        </Link>
        {/* <InputGroup my="6px">
              <Input type="text" placeholder="Search" variant="flushed" />
              <InputRightElement
                pointerEvents="none"
                children={<AiOutlineSearch className="text-black" />}
              />
            </InputGroup> */}
        <div className="flex items-center justify-around w-full mt-3">
          <FaFacebook className="text-blue-700 text-2xl" />
          <FaTwitter className="text-blue-400 text-2xl" />
          <FaInstagram className="text-pink-400 text-2xl" />
          <AiFillLinkedin className="text-blue-500 text-2xl" />
          <FaYoutube className="text-red-500 text-2xl" />
        </div>
      </div>
    </div>
  );
}
