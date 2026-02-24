package com.example.demo.services;

import com.example.demo.DTOs.CreateProjectRequest;
import com.example.demo.models.Project;
import com.example.demo.repositories.ProjectRepository;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    private final ProjectRepository projectRepo;

    public ProjectService(ProjectRepository projectRepo) {
        this.projectRepo = projectRepo;
    }

//    public void createProject(Long id, CreateProjectRequest newProjectRequest) {
//        // Check if GitHub project already exists
//        if (projectRepo.existsBygithubLink(newProjectRequest.getGithubLink())) {
//            throw new IllegalArgumentException(
//                    "Project with this GitHub link already in use: " + newProjectRequest.getGithubLink()
//            );
//        }
//        Project project = new Project();
//        project.setConsultant();
//    }
}
