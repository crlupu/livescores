package com.lupu.highligts.service;

import com.lupu.highligts.repository.League;

import java.util.Date;
import java.util.List;

public interface LeagueService {

    List<League> getLeagues();
    List<League> getLeaguesByDate(Date date);
}
