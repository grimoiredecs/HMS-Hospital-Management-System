package hms.patient.patient.model;
import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.annotation.Id;

@EntityScan
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;
    private String gender;
    private LocalDate dateOfBirth;
    @Embedded
    private Contact contact;
}

