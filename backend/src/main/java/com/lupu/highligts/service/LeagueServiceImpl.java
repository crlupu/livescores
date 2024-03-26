package com.lupu.highligts.service;

import com.lupu.highligts.repository.League;
import com.lupu.highligts.repository.LeagueRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class LeagueServiceImpl implements LeagueService {
    private LeagueRepository leagueRepository;

    @Override
    public List<League> getLeagues() {
        return leagueRepository.findAll();
    }
}
