document.addEventListener("DOMContentLoaded", function () {
    let userData = JSON.parse(sessionStorage.getItem("loggedInUser"));

    if (!userData || userData.type !== "Patient") {
        alert("Access denied! Only patients can view bills.");
        window.location.href = "login.html";
        return;
    }

    let patientID = userData.patientID;

    // Simulated bill database (Replace with actual backend API call)
    let billDatabase = [
        { bill_id: "B001", appointment_id: "A100", total_amount: "$200", payment_status: "Paid", payment_date: "2024-03-10" },
        { bill_id: "B002", appointment_id: "A101", total_amount: "$150", payment_status: "Unpaid", payment_date: "-" }
    ];

    let tableBody = document.getElementById("billsTable");
    billDatabase.forEach(bill => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${bill.bill_id}</td>
            <td>${bill.appointment_id}</td>
            <td>${bill.total_amount}</td>
            <td>${bill.payment_status}</td>
            <td>${bill.payment_status === "Paid" ? bill.payment_date : '<a href="make-payment.html" class="btn btn-sm btn-primary">Pay Now</a>'}</td>
        `;
        tableBody.appendChild(row);
    });
});
