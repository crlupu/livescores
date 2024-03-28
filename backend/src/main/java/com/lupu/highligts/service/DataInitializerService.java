package com.lupu.highligts.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.lupu.highligts.repository.*;
import jakarta.annotation.PostConstruct;
import lombok.AllArgsConstructor;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.charset.Charset;
import java.util.List;

@Service
@AllArgsConstructor
public class DataInitializerService {
    private LeagueRepository leagueRepository;
    private MatchRepository matchRepository;
    private TeamRepository teamRepository;
    private ResourceLoader resourceLoader;

    @PostConstruct
    public void initData() throws IOException {
        String leaguesData = readFileToString("leagues.json");
        String matchesData = readFileToString("matches.json");
        String teamsData = readFileToString("teams.json");
        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        List<League> leagues = mapper.readValue(leaguesData, new TypeReference<>() {});
        List<Team> teams = mapper.readValue(teamsData, new TypeReference<>() {});
        List<Match> matches = mapper.readValue(matchesData, new TypeReference<>() {});

        teamRepository.saveAll(teams);
        leagueRepository.saveAll(leagues);
        matchRepository.saveAll(matches);
    }

    private String readFileToString(String filePath) throws IOException {
        // Implement logic to read file contents (e.g., using ClassLoader or FileSystemResource)
        return resourceLoader.getResource("classpath:" + filePath).getContentAsString(Charset.defaultCharset());
    }
}
