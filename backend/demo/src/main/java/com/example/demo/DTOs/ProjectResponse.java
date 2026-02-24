package com.example.demo.DTOs;

public class ProjectResponse {
    private final String imageUrl;
    private final String projectName;
    private final String description;
    private final String githubLink;


    public ProjectResponse(String imageUrl, String projectName, String description, String githubLink) {
        this.imageUrl = imageUrl;
        this.projectName = projectName;
        this.description = description;
        this.githubLink = githubLink;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public String getProjectName() {
        return projectName;
    }

    public String getDescription() {
        return description;
    }

    public String getGithubLink() {
        return githubLink;
    }
}
