
// =========================================
// HAMBURGER MENU TOGGLE (Mobile)
// =========================================
const menuBtn = document.getElementById('menu-bit');
const navMenu = document.querySelector('nav ul');

// When user taps the hamburger button (☰)
menuBtn.addEventListener('click', function () {
    // classList.toggle adds 'show' if missing, removes it if present!
    navMenu.classList.toggle('show');
});

// Auto-close menu when any navigation link is clicked
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        navMenu.classList.remove('show');
    });
});
// 1. SELECT THE FORM FROM THE HTML
// We use document.getElementById to grab the form
const inquiryForm = document.getElementById('conatct-form');
// 2. LISTEN FOR THE 'submit' EVENT
// When the user clicks the Submit button, this function runs:
inquiryForm.addEventListener('submit', function (event) {
    
    // Stop the page from refreshing (the default browser behavior)
    event.preventDefault();
    // 3. READ THE VALUES ENTERED BY THE USER
    const studentName = document.getElementById('name').value;
    const selectedClass = document.getElementById('class-selection').value;
    const parentPhone = document.getElementById('phone').value;
    // 4. BASIC VALIDATION
    // Check if the phone number is at least 10 digits
    if (parentPhone.length < 10) {
        alert("⚠️ Please enter a valid 10-digit mobile number.");
        return; // Stops here if invalid
    }
    // 5. CREATE THE WHATSAPP MESSAGE
    // Your brother's phone number with India country code (+91)
    const coachingNumber = "+919122844639"; 
    // Craft the text message
    const message = `Hello Learning Point Coaching! I want to enquire for admission.%0A%0A` +
                    `*Student Name:* ${encodeURIComponent(studentName)}%0A` +
                    `*Class:* ${encodeURIComponent(selectedClass)}%0A` +
                    `*Contact Number:* ${encodeURIComponent(parentPhone)}`;
    // The WhatsApp API URL
    const whatsappURL = `https://wa.me/${coachingNumber}?text=${message}`;
    // 6. OPEN WHATSAPP IN A NEW TAB!
    window.open(whatsappURL, '_blank');
});