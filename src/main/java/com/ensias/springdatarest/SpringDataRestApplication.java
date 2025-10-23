package com.ensias.springdatarest;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import com.ensias.springdatarest.modele.*;

@SpringBootApplication
public class SpringDataRestApplication {
    @Autowired
    private VoitureRepo repository;
    @Autowired
    private ProprietaireRepo proprietaireRepo;

    public static void main(String[] args) {
        SpringApplication.run(SpringDataRestApplication.class, args);
    }

    @Bean
    CommandLineRunner runner() {
        return args -> {
            // 1) Save owners first proprietaireRepo.save(new Proprietaire("Ali", "Hassan"))
            Proprietaire p1 = proprietaireRepo.save(new Proprietaire("Ali", "Hassan"));
            Proprietaire p2 = proprietaireRepo.save(new Proprietaire("Najat", "Bani"));

            // 2) Save cars and link to owners
            repository.save(new Voiture("Toyota", "Corolla", "Grise", "A-1-9090", 2018, 95000, p1));
            repository.save(new Voiture("Ford", "Fiesta", "Rouge", "A-2-8090", 2015, 90000, p1));
            repository.save(new Voiture("Honda", "CRV", "Bleu", "A-3-7090", 2016, 140000, p2));
        };
    }
}
