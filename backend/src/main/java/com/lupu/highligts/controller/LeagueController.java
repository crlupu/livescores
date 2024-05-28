package com.lupu.highligts.controller;

import com.lupu.highligts.repository.League;
import com.lupu.highligts.service.LeagueService;
import lombok.AllArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Date;
import java.util.List;

@Controller
@RequestMapping("/leagues")
@AllArgsConstructor
public class LeagueController {
    private LeagueService leagueService;

    @GetMapping("/all")
    public ResponseEntity<List<League>> getAllLeagues(@RequestParam(required = false) @DateTimeFormat(pattern = "yyyy-MM-dd") Date date) {
        return new ResponseEntity<>(date == null ? leagueService.getLeagues() : leagueService.getLeaguesByDate(date), HttpStatus.OK);
    }
}
