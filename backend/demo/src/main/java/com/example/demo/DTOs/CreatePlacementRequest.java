package com.example.demo.DTOs;

import jakarta.validation.constraints.NotBlank;

import java.util.List;

public abstract class CreatePlacementRequest implements List<Long> {
    @NotBlank(message = "Consultant IDs are required")
    private List<Long> consultantIds;

    public CreatePlacementRequest(List<Long> consultantIds) {
        this.consultantIds = consultantIds;
    }

    public List<Long> getConsultantIds() {
        return consultantIds;
    }

    public void setConsultantId(List<Long> consultantIds) {
        this.consultantIds = consultantIds;
    }
}
