document.addEventListener("DOMContentLoaded", function () {
    let userData = JSON.parse(sessionStorage.getItem("loggedInUser"));

    // Redirect if user is not logged in or not an admin
    if (!userData || userData.type !== "Admin") {
        alert("Access denied! Only admins can access this page.");
        window.location.href = "login.html";
        return;
    }

    // Logout function
    document.getElementById("logoutButton").addEventListener("click", function () {
        sessionStorage.removeItem("loggedInUser"); // Clear session data
        alert("You have been logged out.");
        window.location.href = "login.html"; // Redirect to login page
    });
});
