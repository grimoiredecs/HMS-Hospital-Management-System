document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    console.log("Entered Username:", username);
    console.log("Entered Password:", password);

    // Simulated database (Replace with backend API call)
    let users = {
        "patient1": { fullName: "John Doe", type: "Patient", password: "123" },
        "doctor1": { fullName: "Dr. Smith", type: "Doctor", password: "123" },
        "nurse1": { fullName: "Nurse Anne", type: "Nurse", password: "123" },
        "admin1": { fullName: "Admin User", type: "Admin", password: "123" } // Admin should not use this login
    };

    let user = users[username];

    if (user && user.password === password) { // Correct password check
        console.log("User Type:", user.type);

        // Prevent Admins from logging in through `login.html`
        if (user.type === "Admin") {
            alert("Admins must log in through the Admin Login page.");
            window.location.href = "admin-login.html";
            return;
        }

        // Store session data
        sessionStorage.setItem("loggedInUser", JSON.stringify(user));
        alert("Login Successful!");

        // Redirect based on user type
        switch (user.type) {
            case "Patient":
                window.location.href = "patient-dashboard.html";
                break;
            case "Doctor":
                window.location.href = "doctor-dashboard.html";
                break;
            case "Nurse":
                window.location.href = "nurse-dashboard.html";
                break;
            default:
                alert("Invalid user type.");
                window.location.href = "login.html";
        }
    } else {
        alert("Invalid username or password. Try again.");
        console.log("Login Failed: Incorrect credentials.");
    }
});
