// signup.js
const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
      try {
          const response = await fetch('/api/users/signup', {
              method: 'POST',
              body: JSON.stringify({ name, email, password }),
              headers: { 'Content-Type': 'application/json' }
          });

          if (response.ok) {
              document.location.replace('/homepage');
          } else {
              const errorData = await response.json();
              alert(errorData.message || 'Failed to sign up.');
          }
      } catch (error) {
          console.error('Sign up failed:', error);
          alert('Failed to sign up. Please try again.');
      }
  } else {
      alert('Please fill in all fields.');
  }
};

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);

document.addEventListener('DOMContentLoaded', () => {
  const loginLink = document.querySelector('.login-link');
  if (loginLink) {
      loginLink.addEventListener('click', (event) => {
          event.preventDefault();
          document.location.replace('/');
      });
  }
});