from faker import Faker
from random import randint
from patient.models.patient import Patient
from patient.models.medical_history import MedicalHistory

fake = Faker()

departments = [
    "Cardiology",
    "Neurology",
    "Oncology",
    "Pediatrics",
    "General Medicine",
]

diagnoses = [
    "Hypertension", "Diabetes", "Asthma", "Cancer Screening", "Migraine",
    "Chest Pain", "Anemia", "Arthritis", "Allergic Rhinitis", "COVID-19"
]

treatments = [
    "Medication", "Surgery", "Observation", "Lifestyle Change", "Referral",
    "Physiotherapy", "Follow-up", "Immunotherapy", "Chemotherapy", "Counseling"
]

def run():
    Patient.objects.all().delete()
    for _ in range(80):
        patient = Patient.objects.create(
            first_name=fake.first_name(),
            last_name=fake.last_name(),
            date_of_birth=fake.date_of_birth(minimum_age=18, maximum_age=80),
            department=fake.random_element(elements=departments),
            phone=fake.phone_number()[:30],
            email=fake.unique.email()
        )

        for _ in range(randint(1, 3)):
            MedicalHistory.objects.create(
                patient=patient,
                diagnosis=fake.random_element(elements=diagnoses),
                treatment=fake.random_element(elements=treatments),
                visit_date=fake.date_between(start_date="-2y", end_date="today"),
                notes=fake.text(max_nb_chars=120)
            )

    print("✅ 40 patients with medical histories added.")
