package com.lupu.highligts.service;

import com.lupu.highligts.repository.Match;
import com.lupu.highligts.repository.MatchRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class MatchServiceImpl implements MatchService {
    private MatchRepository matchRepository;

    @Override
    public List<Match> getMatches() {
        return this.matchRepository.findAll();
    }
}
