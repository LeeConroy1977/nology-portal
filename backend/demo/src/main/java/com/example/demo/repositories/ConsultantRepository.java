package com.example.demo.repositories;

import com.example.demo.models.Consultant;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ConsultantRepository extends JpaRepository<Consultant, Long> {

    boolean existsByEmail(String email);

    @EntityGraph(attributePaths = {"projects"})
    Optional<Consultant> findById(Long id);
}
