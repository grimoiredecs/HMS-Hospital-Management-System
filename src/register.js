document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("registerForm").addEventListener("submit", function (event) {
        event.preventDefault();

        let username = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value.trim();
        let firstName = document.getElementById("first_name").value.trim();
        let lastName = document.getElementById("last_name").value.trim();
        let dateOfBirth = document.getElementById("date_of_birth").value.trim();
        let phoneNumber = document.getElementById("phone_number").value.trim();
        let email = document.getElementById("email").value.trim();
        let address = document.getElementById("address").value.trim();
        let type = document.getElementById("type").value; // Always "Patient"

        if (!username || !password || !firstName || !lastName || !dateOfBirth || !phoneNumber || !email || !address) {
            alert("All fields are required!");
            return;
        }

        // Simulated database (Replace with backend API call)
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Check if username is unique
        if (users.some(user => user.username === username)) {
            alert("Username already exists! Please choose another.");
            return;
        }

        users.push({ username, password, firstName, lastName, dateOfBirth, phoneNumber, email, address, type });
        localStorage.setItem("users", JSON.stringify(users));

        alert("Registration successful!");
        window.location.href = "login.html"; // Redirect to login page
    });
});
