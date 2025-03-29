document.addEventListener("DOMContentLoaded", function () {
    let userData = JSON.parse(sessionStorage.getItem("loggedInUser"));

    // Redirect if user is not logged in or not an admin
    if (!userData || userData.type !== "Admin") {
        alert("Access denied! Only admins can remove staff.");
        window.location.href = "login.html";
        return;
    }

    document.getElementById("removeStaffForm").addEventListener("submit", function (event) {
        event.preventDefault();

        let username = document.getElementById("username").value.trim();

        if (!username) {
            alert("Please enter a username.");
            return;
        }

        // Simulated database (Replace with actual backend API call)
        let staffList = JSON.parse(localStorage.getItem("staffList")) || [];
        let updatedList = staffList.filter(staff => staff.username !== username);

        if (staffList.length === updatedList.length) {
            alert("Staff member not found.");
        } else {
            localStorage.setItem("staffList", JSON.stringify(updatedList));
            alert("Staff member removed successfully!");
            document.getElementById("removeStaffForm").reset();
        }
    });
});
