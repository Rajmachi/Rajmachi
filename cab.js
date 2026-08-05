function sendBookingToWhatsApp() {
  const name = document.getElementById("name").value;
  const pickup = document.getElementById("pickup").value;
  const drop = document.getElementById("drop").value;
  const datetime = document.getElementById("datetime").value;
  const note = document.getElementById("note").value;

  const message = `*Rajmachi Cab Booking*\n\nName: ${name}\nPickup: ${pickup}\nDrop: ${drop}\nDate & Time: ${datetime}\nNote: ${note}`;
  const encodedMessage = encodeURIComponent(message);

  const phone = "919158413493"; // Your WhatsApp number
  window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");

  return false; // Prevent form from refreshing
}
