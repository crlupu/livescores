import { useEffect, useState } from "react";

export default function Calendar() {
    const [dates, setDates] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date())

    useEffect(() => {
        generateDates();
    }, []);

    function generateDates() {
        const date = new Date(selectedDate);
        const generatedDates = [];
        date.setDate(date.getDate() - 2);
        for (var i = 0; i < 5; i++) {
            generatedDates.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }
        setDates(generatedDates);
    }

    function updateSelectedDate(daysToAdd) {
        selectedDate.setDate(selectedDate.getDate() + daysToAdd);
        generateDates();
    }

    return <div className="flex justify-between">
        <span onClick={() => updateSelectedDate(-1)}>prev</span>
        {dates.map(date => <span key={date}>{date.getDate()}</span>)}
        <span onClick={() => updateSelectedDate(1)}>next</span>
    </div>
}