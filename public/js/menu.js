const homeEventListener = () => {
    document.location.replace('/');
};

const groceryEventListener = () => {
    document.location.replace('/api/grocery');
};

const noteEventListener = () => {
    document.location.replace('/api/note');
};

document.querySelector('#homepage').addEventListener('click', homeEventListener);

document.querySelector('#grocery').addEventListener('click', groceryEventListener);

document.querySelector('#todo').addEventListener('click', noteEventListener);