
const donors = [
    {
        name: "Sample Donor 1",
        bloodGroup: "O+",
        city: "Vijayawada",
        available: true
    },
    {
        name: "Sample Donor 2",
        bloodGroup: "A+",
        city: "Guntur",
        available: true
    },
    {
        name: "Sample Donor 3",
        bloodGroup: "B+",
        city: "Vijayawada",
        available: false
    },
    {
        name: "Sample Donor 4",
        bloodGroup: "O+",
        city: "Vijayawada",
        available: true
    }
];

const searchForm = document.getElementById("searchForm");

if (searchForm) {
    searchForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const bloodGroup =
            document.getElementById("searchBloodGroup").value;

        const city =
            document.getElementById("searchCity").value.trim();

        const results = donors.filter(donor =>
            donor.bloodGroup === bloodGroup &&
            donor.city.toLowerCase() === city.toLowerCase()
        );

        const resultsContainer =
            document.getElementById("donorResults");

        const message =
            document.getElementById("searchMessage");

        if (results.length === 0) {
            resultsContainer.textContent = "No matching sample donors found.";
            message.textContent = "Try another blood group or city.";
            return;
        }

        message.textContent =
            `${results.length} matching sample donor(s) found.`;

        resultsContainer.innerHTML = results.map(donor => `
            <article class="donor-card">
                <h3>${donor.bloodGroup} Donor</h3>
                <p>${donor.name}</p>
                <p>City: ${donor.city}</p>
                <span class="availability-status">
                    ${donor.available ? "Available" : "Currently unavailable"}
                </span>
            </article>
        `).join("");
    });
}
