import Image from "next/image";

export default function TeamScoreSummary({team, score}: {team: Team, score: string}) {
    return (
        <div className='flex w-full items-center'>
            {team.logo ?
                <Image
                src={team.logo}
                alt={`${team.name} logo`}
                sizes="100vw"
                style={{
                    width: 'auto',
                    height: '20px',
                }}
                width={0}
                height={0}
                /> : null
            }
            <span className='ml-3 text-sm'>{team.name}</span>
            <span className='ml-auto'>{score}</span>
        </div>
    )
}