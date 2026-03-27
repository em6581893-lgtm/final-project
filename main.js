function validateForm() {
  let firstName = document.getElementById('firstName').value.trim();
  let lastName = document.getElementById('lastName').value.trim();
  let email = document.getElementById('email').value.trim();
  let message = document.getElementById('message').value.trim();

  if(firstName === "" || lastName === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
    return false; 
  }
  if(email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    alert("Please enter a valid email.");
    return false;
  }
  alert("Form submitted successfully!");
  return true;
}

