package com.example.demo.DTOs;

import java.util.List;

public class ConsultantResponse {
    private final Long id;
    private final String name;
    private final String location;
    private final String email;
    private final String githubLink;
    private final String imageUrl;
    private final String phoneNumber;
    private final List<ProjectResponse> projects;

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
