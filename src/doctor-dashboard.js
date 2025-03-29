document.addEventListener("DOMContentLoaded", function () {
    let userData = JSON.parse(sessionStorage.getItem("loggedInUser"));

    // Redirect if user is not logged in or is not a doctor
    if (!userData || userData.type !== "Doctor") {  // Ensure we're checking 'type' (not 'role')
        alert("Access denied! Only doctors can access this page.");
        window.location.href = "login.html";
        return;
    }

    // Display the doctor's name (if available)
    if (document.getElementById("doctorName")) {
        document.getElementById("doctorName").textContent = userData.fullName;
    }

    // Logout function
    document.getElementById("logoutButton").addEventListener("click", function () {
        sessionStorage.removeItem("loggedInUser"); // Clear session data
        alert("You have been logged out.");
        window.location.href = "login.html"; // Redirect to login page
    });
});
