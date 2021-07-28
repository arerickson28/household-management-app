const loginMenuEventListener = () => {
    document.location.replace('/login');
};


document
.querySelector('#login')
.addEventListener('click', loginMenuEventListener);

