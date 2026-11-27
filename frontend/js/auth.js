
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email =
            document.getElementById("loginEmail").value.trim();

        const password =
            document.getElementById("loginPassword").value;

        const message =
            document.getElementById("loginMessage");

        if (!email || !password) {
            message.textContent = "Please enter all required details.";
            message.style.color = "red";
            return;
        }

        message.textContent =
            "Form validation successful. Backend authentication will be implemented next.";

        message.style.color = "green";
    });
}
