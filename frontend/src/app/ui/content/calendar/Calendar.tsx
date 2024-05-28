import {useState} from "react";
import Image from "next/image";
import DatePicker from "@/app/ui/content/calendar/DatePicker";

interface CalendarProps {
    selectedDate?: Date,
    setSelectedDate?: (value: (((prevState: Date) => Date) | Date)) => void
}

export default function Calendar({selectedDate, setSelectedDate}: CalendarProps) {
    const calendarIcon = "/calendar.svg";
    const [shouldDisplayDatePicker, setShouldDisplayDatePicker] = useState(false);

    function updateSelectedDate(date: Date) {
        setShouldDisplayDatePicker(false);
    }

    return <div className="flex items-center justify-between gap-6 w-full">
        <span className="text-3xl font-bold">{selectedDate?.toLocaleDateString('default', {
            weekday: 'long',
            day: 'numeric',
            month: 'long'
        })}</span>
        <div className="bg-green p-2 rounded-lg">
            <Image onClick={() => setShouldDisplayDatePicker(true)} src={calendarIcon} alt="calendar icon" width="24"
                   height="24"/>
        </div>
        {shouldDisplayDatePicker && selectedDate &&
            <DatePicker
                onCloseClick={() => setShouldDisplayDatePicker(false)}
                updateSelectedDate={updateSelectedDate}
                selectedDate={selectedDate}
            />}
    </div>
}