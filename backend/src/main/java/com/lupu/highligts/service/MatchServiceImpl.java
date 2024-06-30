package com.lupu.highligts.service;

import com.lupu.highligts.entity.League;
import com.lupu.highligts.entity.Match;
import com.lupu.highligts.repository.LeagueRepository;
import com.lupu.highligts.repository.MatchRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.ZoneOffset;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class MatchServiceImpl implements MatchService {
    private MatchRepository matchRepository;
    private LeagueRepository leagueRepository;

    @Override
    public List<Match> getMatches(Long leagueId, String date) {
        LocalDate localDate = LocalDate.parse(date);
        Optional<League> leagueOptional = leagueRepository.findById(leagueId);

        return matchRepository.findAll().stream()
                .filter(match -> leagueOptional.isPresent() && match.getLeague().equals(leagueOptional.get()))
                .filter(match -> isMatchPlayedInGivenDay(match, localDate))
                .toList();
    }


    private boolean isMatchPlayedInGivenDay(Match match, LocalDate date) {
        return match.getDate().atZone(ZoneId.of("UTC")).toLocalDate().isEqual(date);
    }
}
