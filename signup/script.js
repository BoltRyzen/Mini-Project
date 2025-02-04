document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorMessage = document.getElementById('error-message');

    // Simple validation
    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match';
    } else {
        alert('Signup successful!');
        // Here you can add logic to handle the signup (e.g., send data to a server)
    }
});