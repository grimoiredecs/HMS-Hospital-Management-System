document.addEventListener("DOMContentLoaded", function () {
    let userData = JSON.parse(sessionStorage.getItem("loggedInUser"));

    if (!userData || userData.type !== "Nurse") {
        alert("Access denied! Only nurses can edit their profile.");
        window.location.href = "login.html";
        return;
    }

    // Populate form fields with existing data
    document.getElementById("first_name").value = userData.firstName;
    document.getElementById("last_name").value = userData.lastName;
    document.getElementById("phone_number").value = userData.phoneNumber;
    document.getElementById("email").value = userData.email;
    document.getElementById("department").value = userData.department;

    document.getElementById("editProfileForm").addEventListener("submit", function (event) {
        event.preventDefault();

        userData.firstName = document.getElementById("first_name").value.trim();
        userData.lastName = document.getElementById("last_name").value.trim();
        userData.phoneNumber = document.getElementById("phone_number").value.trim();
        userData.email = document.getElementById("email").value.trim();
        userData.department = document.getElementById("department").value.trim();

        let newPassword = document.getElementById("newPassword").value.trim();
        if (newPassword) {
            userData.password = newPassword;
        }

        sessionStorage.setItem("loggedInUser", JSON.stringify(userData));
        alert("Profile updated successfully!");
        window.location.href = "nurse-dashboard.html";
    });
});
