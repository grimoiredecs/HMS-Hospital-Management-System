document.addEventListener("DOMContentLoaded", function () {
    let userData = JSON.parse(sessionStorage.getItem("loggedInUser"));

    // Redirect if user is not logged in or not a nurse
    if (!userData || userData.type !== "Nurse") {
        alert("Access denied! Only nurses can retrieve patient details.");
        window.location.href = "login.html";
        return;
    }

    document.getElementById("nursePatientSearchForm").addEventListener("submit", function (event) {
        event.preventDefault();

        let searchCriteria = document.getElementById("searchCriteria").value;
        let searchValue = document.getElementById("searchValue").value.trim().toLowerCase();

        if (searchValue === "") {
            alert("Please enter a search value.");
            return;
        }

        // Dummy patient database for testing
        let patientDatabase = [
            { 
                patientID: "P001", firstName: "Alice", lastName: "Johnson", dob: "1989-05-15",
                phoneNumber: "123-456-7890", email: "alice@example.com", address: "123 Main St",
                medicalHistory: "Diabetes, Hypertension", prescriptions: "Metformin, Lisinopril",
                allergies: "Peanuts", treatmentNotes: "Regular checkups required.",
                appointments: "2024-04-01"
            },
            { 
                patientID: "P002", firstName: "Bob", lastName: "Smith", dob: "1982-09-21",
                phoneNumber: "987-654-3210", email: "bob@example.com", address: "456 Elm St",
                medicalHistory: "Asthma, Previous Surgery", prescriptions: "Inhaler, Painkillers",
                allergies: "None", treatmentNotes: "Monitor breathing improvements.",
                appointments: "2024-04-02"
            }
        ];

        let matchedPatient = null;

        if (searchCriteria === "patientID") {
            matchedPatient = patientDatabase.find(p => p.patientID.toLowerCase() === searchValue);
        } else if (searchCriteria === "name") {
            matchedPatient = patientDatabase.find(p => 
                p.firstName.toLowerCase() === searchValue ||
                p.lastName.toLowerCase() === searchValue ||
                (p.firstName + " " + p.lastName).toLowerCase() === searchValue
            );
        } else if (searchCriteria === "appointment") {
            matchedPatient = patientDatabase.find(p => p.appointments === searchValue);
        }

        if (matchedPatient) {
            document.getElementById("firstName").textContent = matchedPatient.firstName;
            document.getElementById("lastName").textContent = matchedPatient.lastName;
            document.getElementById("dob").textContent = matchedPatient.dob;
            document.getElementById("phoneNumber").textContent = matchedPatient.phoneNumber;
            document.getElementById("email").textContent = matchedPatient.email;
            document.getElementById("address").textContent = matchedPatient.address;
            document.getElementById("medicalHistory").textContent = matchedPatient.medicalHistory;
            document.getElementById("prescriptions").textContent = matchedPatient.prescriptions;
            document.getElementById("allergies").textContent = matchedPatient.allergies;
            document.getElementById("treatmentNotes").textContent = matchedPatient.treatmentNotes;

            document.getElementById("nursePatientDetails").classList.remove("d-none");
        } else {
            alert("Patient not found. Please check the search criteria.");
            document.getElementById("nursePatientDetails").classList.add("d-none");
        }
    });
});
