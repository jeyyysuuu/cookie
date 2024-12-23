const myDiv = document.getElementById('cookie-container');
const close=document.getElementById('close');
const isConsentGiven = localStorage.getItem('cookieConsent');

document.addEventListener('DOMContentLoaded', () => {
    if (!isConsentGiven) {
        // Show the popup
        cookieContainer.classList.add('visible');
    }

    // Handle button click
    acceptButton.addEventListener('click', () => {
        // Save consent to localStorage
        localStorage.setItem('cookieConsent', 'true');

        // Hide the popup
        cookieContainer.classList.remove('visible');
        cookieContainer.classList.add('visible');
    });
}); 

close.addEventListener('click', () => {
    myDiv.style.opacity = '0'; // Set opacity to 0 to fade out
    myDiv.style.transition = 'opacity 0.3s ease'; // Add transition for smooth effect
});

