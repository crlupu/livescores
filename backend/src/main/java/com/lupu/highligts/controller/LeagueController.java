package com.lupu.highligts.controller;

import com.lupu.highligts.repository.League;
import com.lupu.highligts.service.LeagueService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/leagues")
@AllArgsConstructor
public class LeagueController {
    private LeagueService leagueService;

    @GetMapping("/all")
    public ResponseEntity<List<League>> getAllLeagues() {
        return new ResponseEntity<>(leagueService.getLeagues(), HttpStatus.OK);
    }
}
