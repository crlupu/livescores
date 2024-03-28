package com.lupu.highligts.repository;

import jakarta.persistence.Embeddable;
import lombok.Data;

@Data
@Embeddable
public class Score {
    private String current;
}
