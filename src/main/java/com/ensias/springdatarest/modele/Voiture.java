package com.ensias.springdatarest.modele;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@RequiredArgsConstructor
@NoArgsConstructor
public class Voiture {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NonNull private String marque;
    @NonNull private String modele;       // <- add this
    @NonNull private String couleur;
    @NonNull private String immatricule;
    @NonNull private int annee;
    @NonNull private int prix;

    @NonNull
    @ManyToOne
    @JoinColumn(name = "proprietaire_id")
    @JsonIgnore
    private Proprietaire proprietaire;

    public Voiture(String toyota, String corolla, String grise, String s, int i, int i1) {
    }

    // REMOVE the manual 6-arg constructor
}
