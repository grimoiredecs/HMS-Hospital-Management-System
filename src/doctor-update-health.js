document.addEventListener("DOMContentLoaded", function () {
    let userData = JSON.parse(sessionStorage.getItem("loggedInUser"));

    // Redirect if user is not logged in or not a doctor
    if (!userData || userData.type !== "Doctor") {
        alert("Access denied! Only doctors can update patient records.");
        window.location.href = "login.html";
        return;
    }

    document.getElementById("updateHealthForm").addEventListener("submit", function (event) {
        event.preventDefault();

        let patientID = document.getElementById("patientID").value.trim();
        let diagnosis = document.getElementById("diagnosis").value.trim();
        let treatment = document.getElementById("treatment").value.trim();
        let prescription = document.getElementById("prescription").value.trim();

        if (patientID === "" || diagnosis === "" || treatment === "") {
            alert("Please fill in all required fields.");
            return;
        }

        // Simulated database update (Replace with backend API call)
        let patientRecords = JSON.parse(localStorage.getItem("patientRecords")) || {};
        patientRecords[patientID] = { diagnosis, treatment, prescription };

        localStorage.setItem("patientRecords", JSON.stringify(patientRecords));

        alert("Medical information updated successfully!");
        window.location.href = "doctor-dashboard.html"; // Redirect to dashboard
    });
});
