// Login Form Handler
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    
    // Simple validation for demo
    if (username && password) {
        // Simulate successful login
        alert('Login successful! Welcome to DownloadHub.');
        window.location.href = 'home.html';
    } else {
        alert('Please fill in all fields.');
    }
});

// Signup Form Handler
document.getElementById('signupForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const termsCheck = document.getElementById('termsCheck').checked;
    
    // Validation
    if (!fullName || !email || !username || !password || !confirmPassword) {
        alert('Please fill in all fields.');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    if (!termsCheck) {
        alert('Please accept the Terms and Conditions.');
        return;
    }
    
    // Simulate successful signup
    alert('Account created successfully! Please login.');
    window.location.href = 'login.html';
});
