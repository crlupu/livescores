package com.lupu.highligts.controller;

import com.lupu.highligts.repository.Match;
import com.lupu.highligts.service.MatchService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/matches")
@AllArgsConstructor
public class MatchController {
    MatchService matchService;

    @GetMapping("/all")
    public ResponseEntity<List<Match>> getAllMatches() {
        return new ResponseEntity<>(this.matchService.getMatches(), HttpStatus.OK);
    }
}
