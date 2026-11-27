
const donorForm = document.getElementById("donorForm");

if (donorForm) {
    donorForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const age = Number(document.getElementById("age").value);
        const message = document.getElementById("formMessage");

        if (age < 18 || age > 65) {
            message.textContent = "Please enter an age between 18 and 65.";
            message.style.color = "red";
            return;
        }

        message.textContent =
            "Frontend validation successful! Backend integration is coming next.";

        message.style.color = "green";
    });
}


// Donor dashboard availability interaction

const availabilityToggle =
    document.getElementById("availabilityToggle");

const availabilityText =
    document.getElementById("availabilityText");

if (availabilityToggle && availabilityText) {
    availabilityToggle.addEventListener("change", function () {

        if (availabilityToggle.checked) {
            availabilityText.textContent = "Available";
            availabilityText.style.color = "#166534";
        } else {
            availabilityText.textContent = "Not Available";
            availabilityText.style.color = "#c62828";
        }

    });
}

// Demo logout interaction

const logoutButton = document.getElementById("logoutButton");

if (logoutButton) {
    logoutButton.addEventListener("click", function () {
        alert("Demo logout. Authentication will be implemented in Flask.");
    });
}
