package com.lupu.highligts.controller;

import com.lupu.highligts.entity.Match;
import com.lupu.highligts.service.MatchService;
import lombok.AllArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.time.Instant;
import java.util.Date;
import java.util.List;

@Controller
@RequestMapping("/matches")
@AllArgsConstructor
public class MatchController {
    MatchService matchService;

    @GetMapping("/all")
    public ResponseEntity<List<Match>> getAllMatches(
            @RequestParam(required = false) Long leagueId,
            @RequestParam(required = false) String date
    ) {
        return ResponseEntity.ok(matchService.getMatches(leagueId, date));
    }
}
