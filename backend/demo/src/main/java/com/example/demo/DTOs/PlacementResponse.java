package com.example.demo.DTOs;

import java.util.List;

public class PlacementResponse {
    private Long id;
    private List<ConsultantResponse> consultants;
    private String companyName;
    private String contactName;
    private String phoneNumber;
    private String email;
    private String comments;

    public PlacementResponse(Long id, String companyName, String contactName, String phoneNumber, String email,
            String comments) {
        this.id = id;
        this.companyName = companyName;
        this.contactName = contactName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.comments = comments;
    }
}
