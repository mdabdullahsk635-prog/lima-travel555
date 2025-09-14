// Book Now Button Alert
document.getElementById("bookBtn").addEventListener("click", function() {
  alert("Thanks for choosing Dream Travel! Booking form is below.");
});

// Simple Form Validation
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Your booking request has been submitted successfully!");
});
