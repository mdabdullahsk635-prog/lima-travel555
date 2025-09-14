// Booking Form Submit Event
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault(); // Form submit হলে পেজ reload হবে না
  alert("ধন্যবাদ! আপনার Booking Request জমা হয়েছে।"); // মেসেজ দেখাবে
});
