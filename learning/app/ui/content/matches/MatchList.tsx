import matches from "../../../lib/placeholder-data";

export default function MatchList() {

    return (
        <div>
            {matches.map(league => 
                <div key={league.name}>
                    <p>{league.name}</p>
                    {league.matches.map(match => 
                        <div key={match.awayTeam} className="flex gap-2 pl-5">
                            <span>{match.homeTeam}</span>
                            <span>{match.score}</span>
                            <span>{match.awayTeam}</span>
                        </div>)}
                </div>)}
        </div>
        )
}