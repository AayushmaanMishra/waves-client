import React, { useState } from "react";

import MdScreenNavbar from "./MdScreenNavbar";
import SmScreenNavbar from "./SmScreenNavbar";

export default function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <>
      {toggleNav ? (
        <div className="min-h-[10%]"></div>
      ) : (
        <MdScreenNavbar toggleNav={toggleNav} setToggleNav={setToggleNav} />
      )}
      {toggleNav ? (
        <SmScreenNavbar toggleNav={toggleNav} setToggleNav={setToggleNav} />
      ) : (
        <></>
      )}
    </>
  );
}
