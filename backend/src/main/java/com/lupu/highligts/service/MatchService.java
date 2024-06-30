package com.lupu.highligts.service;

import com.lupu.highligts.entity.Match;

import java.util.List;

public interface MatchService {
    List<Match> getMatches(Long leagueId, String date);
}
