
const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("email-error");

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

emailInput.addEventListener("blur", () => {
  const email = emailInput.value;

  if (!isValidEmail(email)) {
    errorMessage.textContent = "Please enter a valid email address";
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
  }
});
