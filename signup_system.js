document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent form submission
  
  // Get form values
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  
  // Validate inputs
  if (username.length < 3) {
    showMessage("Username must be at least 3 characters", "error");
    return;
  }
  
  if (password.length < 6) {
    showMessage("Password must be at least 6 characters", "error");
    return;
  }
  
  if (password !== confirmPassword) {
    showMessage("Passwords do not match", "error");
    return;
  }
  
  // If validation passes
  showMessage("Signup successful!", "success");
  // Here you would send data to server
});

function showMessage(text, type) {
  const messageDiv = document.getElementById("message");
  messageDiv.textContent = text;
  messageDiv.className = type;
}