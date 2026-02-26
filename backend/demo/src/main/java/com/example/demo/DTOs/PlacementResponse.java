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
            String comments, List<ConsultantResponse> consultants) {
        this.id = id;
        this.companyName = companyName;
        this.contactName = contactName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.comments = comments;
        this.consultants = consultants;
    }

    public PlacementResponse(Long id, List<ConsultantResponse> consultants) {
        this.id = id;
        this.consultants = consultants;
    }

    public PlacementResponse(Long id2, String companyName2, int size) {
        // TODO Auto-generated constructor stub
    }

    public String getCompanyName() {
        return companyName;
    }

    public String getContactName() {
        return contactName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public String getComments() {
        return comments;
    }

    public Long getId() {
        return id;
    }

    public List<ConsultantResponse> getConsultants() {
        return consultants;
    }
}
