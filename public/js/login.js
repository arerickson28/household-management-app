const loginFormHandler = async (event) => {
    event.preventDefault();
    
    const username = document.querySelector('#user-name-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#user-name-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const first_name = document.querySelector('#user-first-signup').value.trim();
    const last_name = document.querySelector('#user-last-signup').value.trim();
  
    if (username && password && first_name && last_name) {
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ username, password, first_name, last_name }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };

const loginMenuEventListener = () => {
    document.location.replace('/login');
};
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  
  document
    .querySelector('#login')
    .addEventListener('click', loginMenuEventListener);
