import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FcDonate } from "react-icons/fc";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import logoWithoutBg from "../assets/logos/WWE_withoutbg.png";
import { RxHamburgerMenu } from "react-icons/rx";
import logoWithBg from "../assets/logos/WWE_withbg.png";

export default function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <>
      {toggleNav ? (
        <div className="min-h-[10%]"></div>
      ) : (
        <div className="sticky top-0 left-0 w-full min-h-[10%] border-b-2 border-white flex items-center justify-between shadow-slate-500 shadow-md bg-pink-600 z-10">
          <Link to="/">
            <img
              src={logoWithBg}
              alt="logo"
              className="w-20 my-1 mx-3 rounded"
            />
          </Link>
          <div className="hidden md:flex md:items-center">
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
          <div className="hidden md:block md:mr-5">
            <InputGroup>
              <Input type="text" placeholder="Search" />
              <InputRightElement
                pointerEvents="none"
                children={<AiOutlineSearch className="text-white" />}
              />
            </InputGroup>
          </div>
          <RxHamburgerMenu
            className="text-white mr-4 text-3xl font-semibold cursor-pointer md:hidden"
            onClick={() => setToggleNav(!toggleNav)}
          />
        </div>
      )}
      {toggleNav ? (
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
            <InputGroup my="6px">
              <Input type="text" placeholder="Search" variant="flushed" />
              <InputRightElement
                pointerEvents="none"
                children={<AiOutlineSearch className="text-black" />}
              />
            </InputGroup>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
