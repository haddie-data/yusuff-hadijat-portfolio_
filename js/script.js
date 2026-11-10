
/* =================================
   1. CONTACT FORM FUNCTIONALITY
================================= */

// Select the contact form
const contactForm = document.getElementById("contactForm");

// Select the response paragraph
const formResponse = document.getElementById("formResponse");

// Listen for form submission
if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        // Prevent the page from refreshing
        event.preventDefault();

        // Collect visitor information
        const visitorName = document.getElementById("name").value.trim();
        const visitorEmail = document.getElementById("email").value.trim();
        const visitorMessage = document.getElementById("message").value.trim();

        // Check if all fields contain information
        if (visitorName === "" || visitorEmail === "" || visitorMessage === "") {

            formResponse.textContent = "Please fill in all fields.";

            return;
        }

        // Display success message
        formResponse.textContent =
            "Thank you, " + visitorName + "! Your message has been received.";

        // Make the message visible
        formResponse.style.display = "block";
        formResponse.style.backgroundColor = "#EAF6FF";
        formResponse.style.padding = "15px";
        formResponse.style.borderRadius = "10px";
        formResponse.style.marginTop = "20px";
        
            // Clear the form
        contactForm.reset();

    });

}


/* =================================
   2. DYNAMIC WELCOME MESSAGE
================================= */

// Create a function for the welcome message
function displayWelcomeMessage() {

    // Select the welcome message element
    const welcomeElement =
        document.getElementById("welcomeMessage");

    // Check if the element exists
    if (welcomeElement) {

        // Display a personalised welcome message
        welcomeElement.textContent =
            "WELCOME TO MY PERSONAL SPACE!";
    }
}

// Run the welcome message function
displayWelcomeMessage();


/* =================================
   3. ACTIVE NAVIGATION FUNCTION
================================= */

// Select all navigation links
const navLinks = document.querySelectorAll(".nav-link");

// Get the current page filename
const currentPage = window.location.pathname.split("/").pop();

// Check each navigation link
navLinks.forEach(function(link) {

    // Get the filename from the link
    const linkPage = link.getAttribute("href").split("/").pop();

    // Highlight the current page
    if (
        linkPage === currentPage ||
        (currentPage === "" && linkPage === "index.html")
    ) {
        link.classList.add("active");
    }

});


/* =================================
   4. TIME-BASED GREETING
================================= */

function displayTimeGreeting() {

    // Get the current hour
    const currentHour = new Date().getHours();

    // Select the greeting element
    const greetingElement =
        document.getElementById("timeGreeting");

    // Check if the element exists
    if (greetingElement) {

        // Determine the appropriate greeting
        if (currentHour < 12) {
            greetingElement.textContent = "Good morning!";

        } else if (currentHour < 17) {
            greetingElement.textContent = "Good afternoon!";

        } else {
            greetingElement.textContent = "Good evening!";
        }
    }
}

// Run the greeting function
displayTimeGreeting();


// Mobile Navigation Menu
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function() {
        navMenu.classList.toggle("show");

        const isOpen = navMenu.classList.contains("show");

        menuToggle.textContent = isOpen ? "✕" : "☰";
        menuToggle.setAttribute("aria-expanded", isOpen);
    });
}

/* Dynamic Footer Year */
const yearElement = document.getElementById("currentYear");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
