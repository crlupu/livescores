'use client'

import React, { useState } from "react";
import Content from "@/app/ui/content/Content";
import Navbar from "@/app/ui/Navbar";

export default function Page() {
  const [selectedOption, setSelectedOption] = useState('matches');

  function handleOptionSelection(buttonId: string) {
    setSelectedOption(buttonId);
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