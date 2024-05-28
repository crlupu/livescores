import {useEffect, useState} from "react";
import api from "@/app/api/api";

interface LeagueProps {
    league?: League,
    date?: Date | undefined
}

export default function League({league, date}: LeagueProps) {
    const [matches, setMatches] = useState<Match[]>([]);

    useEffect(() => {
        api.getMatches(date)
            .then(data => setMatches(data))
    }, [league, date]);

    return (
        <div>
            {league && league.name}
            {matches && matches.map(match => <li key={match.id}>{match.id}</li>)}
        </div>
    )
}