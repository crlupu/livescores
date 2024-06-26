type League = {
    id: string,
    logo: string,
    name: string,
    matches: Match[]
}

type Match = {
    id: string,
    homeTeam: Team,
    awayTeam: Team,
    state: MatchState
}

type MatchState = {
    clock: number,
    score: Score
}

type Score = {
    current: string
}

type Team = {
    id: string,
    logo: string,
    name: string
}