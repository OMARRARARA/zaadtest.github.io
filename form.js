$(document).ready(function () {
  $("#fullForm").on("submit", function (e) {
    e.preventDefault();
    let isValid = true;

    // Clear previous errors and red borders
    $(".error").text("");
    $("input, textarea, select").removeClass("error-border");

    // Validate Name
    let name = $("#name").val().trim();
    if (name === "") {
      $("#nameError").text("Name is required.");
      $("#name").addClass("error-border");
      isValid = false;
    }

    // Validate Password
    let password = $("#password").val().trim();
    if (password === "") {
      $("#passwordError").text("Password is required.");
      $("#password").addClass("error-border");
      isValid = false;
    }

    // Validate Email
    let email = $("#email").val().trim();
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailRegex.test(email)) {
      $("#emailError").text("Enter a valid email.");
      $("#email").addClass("error-border");
      isValid = false;
    }

    // Validate Age
    let age = $("#age").val();
    if (age === "" || age < 18 || age > 100) {
      $("#ageError").text("Age must be between 18 and 100.");
      $("#age").addClass("error-border");
      isValid = false;
    }

    // Validate Phone
    let phone = $("#phone").val().trim();
    let phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      $("#phoneError").text("Phone must be 10 digits.");
      $("#phone").addClass("error-border");
      isValid = false;
    }

    // Validate URL
    let website = $("#website").val().trim();
    let urlRegex = /^(https?:\/\/)?(www\.)?[a-z0-9]+\.[a-z]{2,}(\.[a-z]{2,})?$/;
    if (website && !urlRegex.test(website)) {
      $("#websiteError").text("Enter a valid URL.");
      $("#website").addClass("error-border");
      isValid = false;
    }

    // Validate Date of Birth
    let dob = $("#dob").val().trim();
    if (!dob) {
      $("#dobError").text("Please select your date of birth.");
      $("#dob").addClass("error-border");
      isValid = false;
    }

    // Validate Country
    let country = $("#country").val();
    if (!country) {
      $("#countryError").text("Please select a country.");
      $("#country").addClass("error-border");
      isValid = false;
    }

    // Validate Gender
    if (!$("input[name='gender']:checked").val()) {
      $("#genderError").text("Please select your gender.");
      isValid = false;
    }

    // Validate Checkbox
    if (!$("#terms").is(":checked")) {
      $("#termsError").text("You must agree to the terms.");
      isValid = false;
    }

    // Validate Message
    let message = $("#message").val().trim();
    if (message.length < 10) {
      $("#messageError").text("Message must be at least 10 characters.");
      $("#message").addClass("error-border");
      isValid = false;
    }

    // Display success message
    if (isValid) {
      alert("Form submitted successfully!");
    }
  });

  // Range value update
  $("#satisfaction").on("input", function () {
    $("#rangeValue").text($(this).val());
  });

  // Reset button clears errors and red borders
  $("#resetBtn").on("click", function () {
    $(".error").text("");
    $("input, textarea, select").removeClass("error-border");
    $("#rangeValue").text("5");
  });
});
