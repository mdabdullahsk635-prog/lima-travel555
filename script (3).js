document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.querySelector("input[type='text']").value;
  const email = document.querySelector("input[type='email']").value;
  const destination = document.querySelector("select").value;
  const date = document.querySelector("input[type='date']").value;
  const guests = document.querySelector("input[type='number']").value;

  const phoneNumber = "880987654321"; // এখানে তোমার ফোন নম্বর লিখবে
  const message = `Booking Request:%0AName: ${name}%0AEmail: ${email}%0ADestination: ${destination}%0ADate: ${date}%0AGuests: ${guests}`;

  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
});
