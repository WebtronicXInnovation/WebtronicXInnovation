function sendEmail() {
  var name = document.getElementById("your_name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  // Check if name and email are not empty
  if (name.trim() === "") {
    alert("Please enter your name");
    return;
  }
  if (email.trim() === "") {
    alert("Please enter your email");
    return;
  }

  // Validate email format
  var emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return;
  }

  // Check if message is not empty
  if (message.trim() === "") {
    alert("Please enter your message");
    return;
  }

  // Construct email body
  var mailtoLink =
    "mailto:webtronicxinnovation@gmail.com" +
    "?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(
      "Name: " + name + "\nEmail: " + email + "\n\nMessage: " + message
    );

  // Open default email client with pre-filled data
  window.location.href = mailtoLink;
}

// JavaScript to close navbar after clicking a menu item
// Smooth scrolling for anchor links
$(document).ready(function () {
  $("a.nav-link").on("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      const hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
    // Collapse navbar after click
    $(".navbar-collapse").collapse("hide");
  });
});


 
