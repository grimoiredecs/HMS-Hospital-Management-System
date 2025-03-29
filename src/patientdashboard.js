document.addEventListener("DOMContentLoaded", function () {
    let userData = JSON.parse(sessionStorage.getItem("loggedInUser"));

    if (!userData) {
        alert("You must log in first!");
        window.location.href = "login.html";
        return;
    }

    document.getElementById("patientName").textContent = userData.fullName;

    document.getElementById("logoutBtn").addEventListener("click", function () {
        sessionStorage.removeItem("loggedInUser");
        alert("Logged out successfully!");
        window.location.href = "login.html";
    });
});
