document.addEventListener("DOMContentLoaded", function () {
    let userData = JSON.parse(sessionStorage.getItem("loggedInUser"));

    if (!userData || userData.type !== "Patient") {
        alert("Access denied! Only patients can edit their profile.");
        window.location.href = "login.html";
        return;
    }

    document.getElementById("username").value = userData.username;
    document.getElementById("first_name").value = userData.firstName;
    document.getElementById("last_name").value = userData.lastName;
    document.getElementById("phone_number").value = userData.phoneNumber;
    document.getElementById("email").value = userData.email;
    document.getElementById("address").value = userData.address;

    document.getElementById("editProfileForm").addEventListener("submit", function (event) {
        event.preventDefault();

        userData.firstName = document.getElementById("first_name").value.trim();
        userData.lastName = document.getElementById("last_name").value.trim();
        userData.phoneNumber = document.getElementById("phone_number").value.trim();
        userData.email = document.getElementById("email").value.trim();
        userData.address = document.getElementById("address").value.trim();
        
        let newPassword = document.getElementById("newPassword").value.trim();
        if (newPassword) userData.password = newPassword;

        sessionStorage.setItem("loggedInUser", JSON.stringify(userData));
        alert("Profile updated successfully!");
    });
});
