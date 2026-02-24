package com.example.demo.DTOs;

import jakarta.validation.constraints.NotBlank;
import org.hibernate.validator.constraints.URL;

public class CreateProjectRequest {
    @NotBlank
    private Long consultantId;

    @NotBlank
    @URL
    private String imageUrl;

    @NotBlank
    private String projectName;

    @NotBlank
    private String description;

    @URL(protocol = "https", host = "github.com")
    private String githubLink;

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
