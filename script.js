const form = document.querySelector("form");
const password = document.querySelector("#password");
const confirmation = document.querySelector("#confirmation");
const error = document.querySelector(".error");

window.addEventListener("load", () => {
    // Here, we test if the field is empty (remember, the field is not required)
    // If it is not, we check if its content is a well-formed email address.
    const isValid = confirmation.value === password.value;
    password.className = isValid ? "valid" : "invalid";
    confirmation.className = isValid ? "valid" : "invalid";
});
  
  // This defines what happens when the user types in the field
password.addEventListener("input", () => {
    const isValid = confirmation.value === password.value;
    if (isValid) {
        password.className = "valid";
        confirmation.className = "valid";
        error.textContent = "";
    } else {
        password.className = "invalid";
        error.textContent = "*Passwords do not match";
        confirmation.className = "invalid";
    }
});

confirmation.addEventListener("input", () => {
    const isValid = confirmation.value === password.value;
    if (isValid) {
        password.className = "valid";
        confirmation.className = "valid";
        error.textContent = "";
    } else {
        password.className = "invalid";
        error.textContent = "*Passwords do not match";
        confirmation.className = "invalid";
    }
});


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const isValid = confirmation.value === password.value;
    if (!isValid) {
        password.className = "invalid";
        confirmation.className = "invalid";
        error.textContent = "*Passwords do not match";
    } else {
        password.className = "valid";
        confirmation.className = "valid";
        error.textContent = "";
    }
})