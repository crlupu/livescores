package com.lupu.highligts.entity;

import jakarta.persistence.Embeddable;
import lombok.Data;

@Data
@Embeddable
public class Score {
    private String current;
}
