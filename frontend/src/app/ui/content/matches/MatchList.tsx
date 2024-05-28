import {useEffect, useState} from "react";
import api from "@/app/api/api";
import League from "@/app/ui/content/League";

interface MatchListProps {
    selectedDate?: Date
}

export default function MatchList({selectedDate}: MatchListProps) {
    const [leagues, setLeagues] = useState<League[]>([]);

    useEffect(() => {
        api.getLeagues(selectedDate)
            .then(data => {
                setLeagues(data);
            });
    }, [])
    return (
        <div>
            {leagues?.map(league => <League key={league.id} league={league} date={selectedDate}/>)}
        </div>
    )
}