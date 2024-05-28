import Calendar from "../calendar/Calendar";
import MatchList from "./MatchList";
import {useState} from "react";

export default function Matches() {
    const [selectedDate, setSelectedDate] = useState(new Date(2023, 7, 12));

    return (
        <>
            <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
            <MatchList selectedDate={selectedDate}/>
        </>
    )
}