const input = document.querySelectorAll("#input");
const btn = document.getElementById("btn");

btn.addEventListener("click", function (event) {
  event.preventDefault();

  const userName = input[0].value.trim();
  const email = input[1].value.trim();

  if (userName === "" || email === "") {
    alert("Please fill the form");
  } else {
    alert("Login successful");
  }
  form.reset();
});
