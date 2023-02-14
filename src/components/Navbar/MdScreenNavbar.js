import { Button } from "@chakra-ui/react";
import React from "react";
import { FcDonate } from "react-icons/fc";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import logoWithBg from "../../assets/logos/WWE_withbg.png";

export default function MdScreenNavbar({ setToggleNav, toggleNav }) {
  return (
    <div className="sticky top-0 left-0 w-full min-h-[10%] border-b-2 border-white flex items-center justify-between shadow-slate-500 shadow-md bg-pink-600 z-10">
      <Link to="/">
        <img
          src={logoWithBg}
          alt="logo"
          className="w-14 md:w-20 my-1 mx-3 rounded"
        />
      </Link>
      <div className="hidden md:flex md:items-center">
        <Link to="/">
          <p className="lg:text-xl text-white hover:text-gray-200 hover:cursor-pointer mx-3">
            Home
          </p>
        </Link>
        <Link to="/about">
          <p className="lg:text-xl text-white hover:text-gray-200 hover:cursor-pointer mx-3">
            About Us
          </p>
        </Link>
        <Link to="/getinvolved">
          <p className="lg:text-xl text-white hover:text-gray-200 hover:cursor-pointer mx-3">
            Get Involved
          </p>
        </Link>
        <Link to="/ourworks">
          <p className="lg:text-xl text-white hover:text-gray-200 hover:cursor-pointer mx-3">
            Our Works
          </p>
        </Link>
        <Link to="/contact">
          <p className="lg:text-xl text-white hover:text-gray-200 hover:cursor-pointer mx-3">
            Contact Us
          </p>
        </Link>
        {/* <Link to="/contribute">
              <p className="lg:text-xl flex items-center text-white font-semibold hover:underline hover:cursor-pointer mx-2">
                Contribute <FcDonate />
              </p>
            </Link> */}
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
      {/* <div className="hidden md:block md:mr-5">
            <InputGroup>
              <Input type="text" placeholder="Search" />
              <InputRightElement
                pointerEvents="none"
                children={<AiOutlineSearch className="text-white" />}
              />
            </InputGroup>
          </div> */}
      <RxHamburgerMenu
        className="text-white mr-4 text-3xl font-semibold cursor-pointer md:hidden"
        onClick={() => setToggleNav(!toggleNav)}
      />
    </div>
  );
}
