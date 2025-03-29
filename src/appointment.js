document.getElementById("appointmentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let doctor = document.getElementById("doctor").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let reason = document.getElementById("reason").value.trim();

    if (doctor === "" || date === "" || time === "" || reason === "") {
        alert("All fields are required!");
        return;
    }

    // Simulating appointment storage (localStorage for testing)
    let appointment = { doctor, date, time, reason };
    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    appointments.push(appointment);
    localStorage.setItem("appointments", JSON.stringify(appointments));

    alert("Appointment booked successfully!");
    document.getElementById("appointmentForm").reset();
});
