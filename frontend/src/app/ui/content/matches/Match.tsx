import TeamScoreSummary from "@/app/ui/content/matches/TeamScoreSummary";
import {Card, CardBody} from "@nextui-org/card";
import {Divider, Spacer} from "@nextui-org/react";

export default function Match({match}: { match: Match }) {
    return (
        <>
            <Card radius='sm' className='mt-1.5 md:w-1/5' shadow='none'>
                <CardBody>
                    <div className="flex items-center w-full gap-2">
                        <div>
                            FT
                        </div>
                        <div className='bg-zinc-50 h-10 w-0.5' />
                        <div className='w-full'>
                            <TeamScoreSummary
                                team={match.homeTeam}
                                score={match.state.score.current.trim().split('-')[0]}
                            />
                            <TeamScoreSummary
                                team={match.awayTeam}
                                score={match.state.score.current.trim().split('-')[1]}
                            />
                        </div>
                    </div>
                </CardBody>
            </Card>
        </>
    )
}