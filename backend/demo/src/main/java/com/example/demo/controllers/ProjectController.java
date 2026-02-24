package com.example.demo.controllers;

import com.example.demo.DTOs.CreateProjectRequest;
import com.example.demo.DTOs.ProjectResponse;
import com.example.demo.services.ProjectService;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/projects")
public class ProjectController {

    private final ProjectService projectService;

    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @DeleteMapping


}
