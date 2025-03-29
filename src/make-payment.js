document.addEventListener("DOMContentLoaded", function () {
    let paymentMethod = document.getElementById("paymentMethod");
    let cardDetails = document.getElementById("cardDetails");

    // Load bill details (Replace this with actual backend API call)
    let bill = JSON.parse(sessionStorage.getItem("selectedBill"));

    if (!bill) {
        alert("No bill selected for payment.");
        window.location.href = "view-bill.html";
        return;
    }

    document.getElementById("billID").textContent = bill.bill_id;
    document.getElementById("appointmentID").textContent = bill.appointment_id;
    document.getElementById("paymentAmount").textContent = bill.total_amount;

    paymentMethod.addEventListener("change", function () {
        if (paymentMethod.value === "Credit Card" || paymentMethod.value === "Debit Card") {
            cardDetails.classList.remove("d-none");
        } else {
            cardDetails.classList.add("d-none");
        }
    });

    document.getElementById("paymentForm").addEventListener("submit", function (event) {
        event.preventDefault();

        let selectedMethod = paymentMethod.value;
        if (selectedMethod === "") {
            alert("Please select a payment method.");
            return;
        }

        if (selectedMethod === "Credit Card" || selectedMethod === "Debit Card") {
            let cardNumber = document.getElementById("cardNumber").value.trim();
            let expiryDate = document.getElementById("expiryDate").value;
            let cvv = document.getElementById("cvv").value.trim();

            if (cardNumber === "" || expiryDate === "" || cvv === "") {
                alert("Please fill in all card details.");
                return;
            }
        }

        // Generate payment data
        let payment = {
            payment_id: "P" + Math.floor(1000 + Math.random() * 9000), // Simulated payment ID
            payment_date: new Date().toISOString().split("T")[0], // Today's date
            payment_amount: bill.total_amount,
            payment_method: selectedMethod,
            payment_status: "Completed"
        };

        // Simulated database update (Replace with actual backend API call)
        let payments = JSON.parse(localStorage.getItem("payments")) || [];
        payments.push(payment);
        localStorage.setItem("payments", JSON.stringify(payments));

        // Update bill status
        let bills = JSON.parse(localStorage.getItem("bills")) || [];
        let updatedBills = bills.map(b => {
            if (b.bill_id === bill.bill_id) {
                return { ...b, payment_status: "Paid", payment_date: payment.payment_date };
            }
            return b;
        });

        localStorage.setItem("bills", JSON.stringify(updatedBills));

        alert("Payment successful via " + selectedMethod + "! Your bill is now paid.");
        window.location.href = "view-bill.html";
    });
});
