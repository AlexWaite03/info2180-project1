/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function() {
  var form = document.querySelector("form");
  var emailInput = document.getElementById("email");
  var messageDiv = document.querySelector(".message");

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    var email = emailInput.value.trim();

    if (email === "") {
      messageDiv.textContent = "Please enter a valid email address.";
    } else {
      messageDiv.textContent = "Thank you! Your email address " + email + " has been added to our mailing list!";
      emailInput.value = "";
    }
  });
});
