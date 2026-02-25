package com.example.demo.DTOs;

import java.util.List;

public class ConsultantResponse {
    private Long id;
    private final String name;
    private final String location;
    private final String email;
    private final String githubLink;
    private final String imageUrl;
    private final String phoneNumber;
    private List<ProjectResponse> projects;

    // Will be used for "api/v1/consultants" (GET)
    public ConsultantResponse(Long id,
                              String name,
                              String location,
                              String email,
                              String imageUrl,
                              String githubLink,
                              String phoneNumber,
                              List<ProjectResponse> projects
    ) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.email = email;
        this.imageUrl = imageUrl;
        this.githubLink = githubLink;
        this.phoneNumber = phoneNumber;
        this.projects = projects;
    }

    public ConsultantResponse(String phoneNumber, String imageUrl, String githubLink, String email, String location, String name) {
        this.phoneNumber = phoneNumber;
        this.imageUrl = imageUrl;
        this.githubLink = githubLink;
        this.email = email;
        this.location = location;
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getLocation() {
        return location;
    }

    public String getEmail() {
        return email;
    }

    public String getGithubLink() {
        return githubLink;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public List<ProjectResponse> getProjects() {
        return projects;
    }
}
