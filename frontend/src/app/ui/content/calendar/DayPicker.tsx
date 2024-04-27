import {useEffect, useState} from "react";
import {number} from "prop-types";

export default function DayPicker({calendarDate, updateSelectedDate}: {calendarDate: Date, updateSelectedDate: (date: Date) => void}) {
    const [days, setDays] = useState<number[]>([]);
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    useEffect(() => {
        generateDays(calendarDate);
    }, [calendarDate]);

    function generateDays(date: Date): void {
        const numberOfDays: number = getNumberOfDaysInMonth(date);
        const dayOfWeek: number = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        const days: number[] = [...Array(dayOfWeek > 0 ? dayOfWeek - 1 : 6).fill(-1)];

        for (let i = 1; i <= numberOfDays; i++) {
            days.push(i);
        }

        setDays(days);
    }

    function getNumberOfDaysInMonth(date: Date): number {
        return new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    }

    function onSelectDate(day: number) {
        updateSelectedDate(new Date(calendarDate.getFullYear(), calendarDate.getMonth(), day));
    }

    return <div className="bg-white flex flex-wrap">
        {daysOfWeek.map(day => <p key={day} className="w-1/7 text-center mt-5">{day}</p> )}
        {days.map((day, idx) =>
            <p key={day + idx} className="w-1/7 text-center mt-5" onClick={() => onSelectDate(day)}>
                {day > 0 && day}
            </p>)}
    </div>
}