import Image from "next/image";
import {useState} from "react";

export default function MonthPicker({calendarDate, setCalendarDate}: {calendarDate: Date, setCalendarDate: (date: Date) => void}) {
    const chevronBack = "/chevron-back.svg";
    const chevronForward = "/chevron-forward.svg";

    function updateCalendarDate(month: number) {
        const newDate = new Date(calendarDate.getFullYear(), month);
        setCalendarDate(newDate);
    }
    return <div className="flex justify-between text-white text-xl pb-4 px-16">
        <Image src={chevronBack} alt="chevron back" width={24} height={24} onClick={() => updateCalendarDate(calendarDate.getMonth() - 1)} />
        {calendarDate.toLocaleString('default', { month: 'long' })}
        <Image src={chevronForward} alt="chevron back" width={24} height={24} onClick={() => updateCalendarDate(calendarDate.getMonth() + 1)} />
    </div>
}