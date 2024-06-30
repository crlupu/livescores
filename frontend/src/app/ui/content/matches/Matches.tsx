import MatchDatePicker from "../calendar/MatchDatePicker";
import Leagues from "../league/Leagues";
import {useState} from "react";
import {DateValue} from "@nextui-org/react";
import {parseDate} from "@internationalized/date";

export default function Matches() {
    const [selectedDate, setSelectedDate] = useState<DateValue>(parseDate("2023-08-27"));

    return (
        <>
            <MatchDatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
            <Leagues selectedDate={selectedDate}/>
        </>
    )
}