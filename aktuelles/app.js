// app.js

// Darkmode-Cookie-Variable
const darkModeCookieName = "darkModeEnabled";

// Darkmode-Toggle-Funktion
function toggleDarkMode() {
    const body = document.body;
    const isDarkModeEnabled = body.classList.contains("dark-mode");

    if (isDarkModeEnabled) {
        body.classList.remove("dark-mode");
        document.cookie = `${darkModeCookieName}=false; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/;`;
        document.getElementById("dark-mode-toggle").textContent = "Darkmode";
    } else {
        body.classList.add("dark-mode");
        document.cookie = `${darkModeCookieName}=true; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/;`;
        document.getElementById("dark-mode-toggle").textContent = "Lightmode";
    }
}

// Seite bei Laden laden
document.addEventListener("DOMContentLoaded", () => {
    // Darkmode-Cookie auslesen
    const darkModeCookieValue = document.cookie.split(";").find(cookie => cookie.startsWith(darkModeCookieName))?.split("=")[1];

    // Darkmode aktivieren oder deaktivieren, basierend auf dem Cookie-Wert
    if (darkModeCookieValue === "true") {
        document.body.classList.add("dark-mode");
        document.getElementById("dark-mode-toggle").textContent = "Lightmode";
    } else {
        document.getElementById("dark-mode-toggle").textContent = "Darkmode";
    }

    // Event-Listener hinzufügen
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    darkModeToggle.addEventListener("click", toggleDarkMode);
});
