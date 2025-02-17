document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById("username");
    const saveButton = document.getElementById("save-btn");
    const clearButton = document.getElementById("clear-btn");
    const displayName = document.getElementById("display-name");

    // Load saved name if it exists
    const savedName = localStorage.getItem("username");
    if (savedName) {
        displayName.textContent = `Saved Name: ${savedName}`;
    }

    // Save name to localStorage
    saveButton.addEventListener("click", function () {
        const name = usernameInput.value.trim();
        if (name) {
            localStorage.setItem("username", name);
            displayName.textContent = `Saved Name: ${name}`;
        }
    });

    // Clear saved name
    clearButton.addEventListener("click", function () {
        localStorage.removeItem("username");
        displayName.textContent = "";
    });
});