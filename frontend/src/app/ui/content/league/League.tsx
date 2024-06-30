import {useEffect, useState} from "react";
import api from "@/app/api/api";
import Match from "@/app/ui/content/matches/Match";
import Image from "next/image";
import {Calendar, DateValue} from "@nextui-org/react";
import Icon from "@/app/ui/Icon";

interface LeagueProps {
    league?: League,
    date?: DateValue | undefined
}

export default function League({league, date}: LeagueProps) {
    const [matches, setMatches] = useState<Match[]>([]);

    useEffect(() => {
        if (league && date) {
            api.getMatches(league.id, date)
                .then(data => setMatches(data));
        }
    }, [league, date]);

    return (
        <div>
            {league && matches.length > 0 &&
                <>
                    <div className='flex items-center mt-5'>
                        <Icon
                            source={league.logo}
                            description={`${league.name} logo`}
                            width={30}
                        />
                        <span className='ml-2 text-lg font-medium'>{league.name}</span>
                    </div>
                    <div className='md:flex md:gap-2 md:flex-wrap'>
                        {matches.map(match => <Match key={match.id} match={match}/>)}
                    </div>
                </>
            }
        </div>
    )
}