'use client'

import { useState } from "react";
import Content from "./ui/content/Content";
import Navbar from "./ui/Navbar";

export default function Page() {
  const [selectedOption, setSelectedOption] = useState('matches');

  function handleOptionSelection(e) {
    console.log(e);
    setSelectedOption(e.target.id);
  }

    return (
      <div className="grid grid-cols-1 grid-rows-8 h-full">
        <Content 
          selectedView={selectedOption}/>
        <Navbar 
          selectedOption={selectedOption}
          onSelectOption={handleOptionSelection}/>
      </div>
    )
  }