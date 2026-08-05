document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = this.name.value;
  const phone = this.phone.value;
  const people = this.people.value;
  const date = this.date.value;
  const message = this.message.value;

  const whatsappMessage = `Hello, I'm ${name}. I want to book for ${people} people on ${date}. Notes: ${message}`;
  const url = `https://wa.me/919158413493?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(url, '_blank');
});
