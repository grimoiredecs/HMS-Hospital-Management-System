package hms.patient.patient.model;
import jakarta.persistence.Embeddable;
import lombok.*;

@Embeddable
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Contact {
    private String phoneNumber;
    private String email;
    private String address;
}
