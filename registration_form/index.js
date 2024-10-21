const RegistrationForm = document.getElementById("Registration-Form");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const registerbtn = document.getElementById("registerbtn");

registerbtn.addEventListener("click", function (event) {
  event.preventDefault();

  if (firstName.value === "" || lastName.value === "") {
    alert("Please fill First Name and Last name");
    return;
  }

  if (password.value.length < 8) {
    alert("The Password should contain atleast 8 charecters long");
    return;
  }
  alert("Registration Successful");
  RegistrationForm.reset();
});
