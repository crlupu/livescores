import { useEffect, useState } from "react";
import api from "@/app/api/api";

export default function MatchList() {
    const [leagues, setLeagues] = useState<League[]>([]);

    useEffect(() => {
        api.getLeagues()
            .then(data => setLeagues(data));
    }, [])
    return (
        <div>
             {leagues.map(league => <div key={league.id}>{league.name}</div>)}
        </div>
    )
}