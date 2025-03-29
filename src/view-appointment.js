document.addEventListener("DOMContentLoaded", function () {
    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    let list = document.getElementById("appointmentsList");

    if (appointments.length === 0) {
        list.innerHTML = '<li class="list-group-item text-center">No appointments found.</li>';
    } else {
        appointments.forEach(appointment => {
            let item = document.createElement("li");
            item.classList.add("list-group-item");
            item.innerHTML = `<strong>Doctor:</strong> ${appointment.doctor} <br>
                              <strong>Date:</strong> ${appointment.date} <br>
                              <strong>Time:</strong> ${appointment.time} <br>
                              <strong>Reason:</strong> ${appointment.reason}`;
            list.appendChild(item);
        });
    }
});
