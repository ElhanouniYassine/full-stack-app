package com.ensias.springdatarest.web;

import com.ensias.springdatarest.modele.Voiture;
import com.ensias.springdatarest.modele.VoitureRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
// VoitureController.java
@RequestMapping("/voitures")
public class VoitureController {
    @Autowired private VoitureRepo voitureRepo;
    @Autowired private VoitureRepo repo;
    @GetMapping
    public Iterable<Voiture> getVoitures() {
        return voitureRepo.findAll();
    }

    @PostMapping
    public Voiture addVoiture(@RequestBody Voiture v) {
        return voitureRepo.save(v);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        if (!repo.existsById(id)) return ResponseEntity.notFound().build();
        repo.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}

