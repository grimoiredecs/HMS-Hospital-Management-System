package hms.patient.patient.service;

import java.util.List;

import hms.patient.patient.model.Patient;

//interface for the service
public interface PatientService {
    Patient create(Patient p);
    Patient findById(Long id);
    List<Patient> findAll();
    Patient update(Long id, Patient p);
    void delete(Long id);
}
