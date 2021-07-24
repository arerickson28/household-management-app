const loginFormHandler = async (event) => {
    event.preventDefault();
    const username = document.querySelector('#user-name-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/api/groups');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#user-name-signup').value.trim();
    //const email = document.querySelector('#user-email-signup').value.trim();
    const firstName = document.querySelector('#user-first-signup').value.trim();
    const lastName = document.querySelector('#user-last-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && firstName && lastName && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, firstName, lastName, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/api/users');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  