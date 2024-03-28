package com.lupu.highligts.repository;

import jakarta.persistence.Embeddable;
import lombok.Data;

@Data
@Embeddable
public class State {
    private int clock;
    private Score score;
    private String description;
}
