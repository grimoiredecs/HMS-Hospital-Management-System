document.getElementById("adminLoginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let username = document.getElementById("adminUsername").value.trim();
    let password = document.getElementById("adminPassword").value.trim();

    // Simulated admin credentials (Replace with backend API call)
    let adminUsers = {
        "admin1": { fullName: "Admin User", type: "Admin", password: "admin123" }
    };

    let user = adminUsers[username];

    if (user && user.password === password) {
        sessionStorage.setItem("loggedInUser", JSON.stringify(user));
        alert("Admin Login Successful!");
        window.location.href = "admin-dashboard.html"; // Redirect to Admin Dashboard
    } else {
        alert("Invalid credentials. Try again.");
    }
});
