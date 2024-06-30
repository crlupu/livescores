import {useEffect, useState} from "react";
import api from "@/app/api/api";
import League from "@/app/ui/content/league/League";
import {DateValue} from "@nextui-org/react";

interface LeaguesProps {
    selectedDate?: DateValue
}

export default function Leagues({selectedDate}: LeaguesProps) {
    const [leagues, setLeagues] = useState<League[]>([]);

    useEffect(() => {
        if (selectedDate) {
            api.getLeagues(selectedDate)
                .then(data => {
                    setLeagues(data);
                });
        }
    }, [selectedDate])
    return (
        <div>
            {leagues?.map(league => <League key={league.id} league={league} date={selectedDate}/>)}
        </div>
    )
}