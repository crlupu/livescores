'use client'

import React, {useState} from "react";
import Content from "@/app/ui/content/Content";
import {DateValue, NextUIProvider} from "@nextui-org/react";
import {parseDate} from "@internationalized/date";

export default function Page() {
    const [selectedOption, setSelectedOption] = useState('matches');

    let [value, setValue] = useState<DateValue>(parseDate("2024-06-22"));

    function handleOptionSelection(buttonId: string) {
        setSelectedOption(buttonId);
    }

    return (
        <NextUIProvider>
            <div className="grid grid-cols-1 grid-rows-8 h-full bg-zinc-50">
                {/*<div>*/}
                {/*    <Calendar*/}
                {/*        aria-label="Date (Controlled)"*/}
                {/*        value={value}*/}
                {/*        onChange={setValue}*/}
                {/*        calendarWidth={100}*/}
                {/*    />*/}
                {/*</div>*/}
                <Content
                    selectedView={selectedOption}/>
                {/*<Navbar*/}
                {/*    selectedOption={selectedOption}*/}
                {/*    onSelectOption={handleOptionSelection}/>*/}
            </div>
        </NextUIProvider>
    )
}