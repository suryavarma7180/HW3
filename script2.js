function validateForm() {
    // Get the form elements
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const termsInput = document.getElementById('terms');

    // Validate the email address
    if (!emailInput.checkValidity()) {
        alert('Please enter a valid email address');
        return false;
    }

    // Validate the password
    if (passwordInput.value.length < 6) {
        alert('Password must be at least 6 characters long');
        return false;
    }

    // Validate the confirmation password
    if (confirmPasswordInput.value !== passwordInput.value) {
        alert('Passwords do not match');
        return false;
    }

    // Check if the terms checkbox is checked
    if (!termsInput.checked) {
        alert('Please accept the terms & conditions');
        return false;
    }

    // If all validations pass, submit the form
    return true;
}