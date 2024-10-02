document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    
    if (username === '' || password === '') {
        document.getElementById('error-message').textContent = 'Please fill in both fields';
    } else {
        document.getElementById('error-message').textContent = '';
        
        alert('Login successful!');  
    }
});
