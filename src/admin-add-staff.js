document.addEventListener("DOMContentLoaded", function () {
    // Dummy department data for testing
    let dummyDepartments = [
        { department_id: "D001", department_name: "Cardiology" },
        { department_id: "D002", department_name: "Neurology" },
        { department_id: "D003", department_name: "Pediatrics" },
        { department_id: "D004", department_name: "Emergency" }
    ];

    // Populate the department dropdown
    let departmentDropdown = document.getElementById("department");
    departmentDropdown.innerHTML = "";
    dummyDepartments.forEach(department => {
        let option = document.createElement("option");
        option.value = department.department_id;
        option.textContent = department.department_name;
        departmentDropdown.appendChild(option);
    });

    // Show specialization only for doctors
    document.getElementById("staffType").addEventListener("change", function () {
        let isDoctor = this.value === "Doctor";
        document.getElementById("specializationField").style.display = isDoctor ? "block" : "none";
    });

    // Handle staff registration with dummy data
    document.getElementById("addStaffForm").addEventListener("submit", function (event) {
        event.preventDefault();

        let staffType = document.getElementById("staffType").value;
        let firstName = document.getElementById("first_name").value.trim();
        let lastName = document.getElementById("last_name").value.trim();
        let username = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value.trim();
        let phoneNumber = document.getElementById("phone_number").value.trim();
        let email = document.getElementById("email").value.trim();
        let specialization = document.getElementById("specialization").value.trim();
        let department = document.getElementById("department").value;
        let departmentName = document.getElementById("department").options[document.getElementById("department").selectedIndex].text;

        if (!firstName || !lastName || !username || !password || !phoneNumber || !email || !department) {
            alert("All fields are required!");
            return;
        }

        let newStaff = {
            staffType,
            staff_id: staffType === "Doctor" ? "D" + Math.floor(1000 + Math.random() * 9000) : "N" + Math.floor(1000 + Math.random() * 9000),
            firstName,
            lastName,
            username,
            password,
            phoneNumber,
            email,
            department_id: department,
            department_name: departmentName
        };

        if (staffType === "Doctor") {
            newStaff.specialization = specialization;
        }

        console.log("New Staff Data:", newStaff); // Debugging: Check data in console
        alert(staffType + " added successfully!");
        window.location.href = "admin-dashboard.html";
    });
});
