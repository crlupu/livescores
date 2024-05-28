package com.lupu.highligts.service;

import com.lupu.highligts.repository.League;
import com.lupu.highligts.repository.LeagueRepository;
import com.lupu.highligts.repository.Match;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.ZoneId;
import java.util.Date;
import java.util.List;

@Service
@AllArgsConstructor
public class LeagueServiceImpl implements LeagueService {
    private LeagueRepository leagueRepository;
    private MatchService matchService;

    @Override
    public List<League> getLeagues() {
        return leagueRepository.findAll();
    }

    @Override
    public List<League> getLeaguesByDate(Date date) {
        return matchService.getMatches().stream()
                .filter(match -> match.getDate().toInstant().atZone(ZoneId.systemDefault()).toLocalDate().equals(date.toInstant().atZone(ZoneId.systemDefault()).toLocalDate()))
                .map(Match::getLeague)
                .distinct()
                .toList();
    }
}
