const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (email && password) {
        try {
            const response = await fetch('/login', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: { 'Content-Type': 'application/json' }
            });

            if (response.ok) {
                document.location.replace('/homepage');
            } else {
                alert('Login failed. Please try again.');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    }
};

document.querySelector('#loginForm').addEventListener('submit', loginFormHandler);

  document.querySelector('.signup-link').addEventListener('click', () => {
    document.location.href = '/signup';
  });
  