import MonthPicker from "@/app/ui/content/calendar/MonthPicker";
import Image from "next/image";
import DayPicker from "@/app/ui/content/calendar/DayPicker";
import {useState} from "react";

interface DatePickerProps {
    onCloseClick: () => void;
    updateSelectedDate: (date: Date) => void;
    selectedDate: Date;
}

export default function DatePicker({onCloseClick, selectedDate, updateSelectedDate}: DatePickerProps) {
    const closeIcon = "/close.svg";
    const [calendarDate, setCalendarDate] = useState(selectedDate);

    return <div className="fixed left-0 top-0 py-3 px-2 w-full z-10">
        <div className="bg-green rounded-lg">
            <Image className="pr-1 pt-1 ml-auto" src={closeIcon} alt="close icon" width={28} height={28} onClick={onCloseClick}/>
            <MonthPicker
                setCalendarDate={(date: Date) => setCalendarDate(date)}
                calendarDate={calendarDate} />
            <DayPicker
                calendarDate={calendarDate}
                updateSelectedDate={updateSelectedDate}/>
        </div>
    </div>
}