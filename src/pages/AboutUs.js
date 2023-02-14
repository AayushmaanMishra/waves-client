import { Button } from "@chakra-ui/react";
import React, { useState } from "react";

export default function AboutUs() {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    const elements = document.querySelectorAll("*");
    // console.log(elements);
    elements.forEach((element) => {
      if (element.innerHTML.includes(searchText)) {
        // element.style.backgroundColor = "yellow";
        console.log(element);
      }
    });
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="border border-gray-200 rounded"
      />
      <Button colorScheme="green" onClick={handleSearch}>
        Search
      </Button>
      <p>Hi this is Yuvraj singh</p>
    </div>
  );
}
