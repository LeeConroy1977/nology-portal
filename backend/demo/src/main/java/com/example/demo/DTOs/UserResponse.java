package com.example.demo.DTOs;

import com.example.demo.models.Placement;

import java.util.List;

public class UserResponse {
    private final String companyName;
    private final List<Placement> listOfPlacements;

    public UserResponse(String companyName, List<Placement> listOfPlacements) {
        this.companyName = companyName;
        this.listOfPlacements = listOfPlacements;
    }

    public String getCompanyName() {
        return companyName;
    }

    public List<Placement> getListOfPlacements() {
        return listOfPlacements;
    }
}
