/**
 * Global Booking Function
 * @param {string} packageName - The exact name of the plan selected
 */
function bookPlan(packageName) {
    const contactNumber = "917083331419"; // Replace with your actual WhatsApp number
    const baseMessage = `Hello Rajmachi Stays! I would like to reserve the following curated experience:

📌 *${packageName}*

Please let me know about availability and the next steps. Thank you!`;

    const encodedMessage = encodeURIComponent(baseMessage);
    const whatsappUrl = `https://wa.me/${contactNumber}?text=${encodedMessage}`;
    
    // Open in a new tab for better UX
    window.open(whatsappUrl, '_blank');
}

// Simple reveal animation on load
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.p-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 150 * index); // staggered effect
    });
});