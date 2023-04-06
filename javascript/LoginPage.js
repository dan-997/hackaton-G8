
const form = document.getElementById('loginform');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errormessage = document.getElementById('errormessage');

console.log(usernameInput);
console.log(passwordInput);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (!username || !password) {
        // alert('Please enter a username and password');
        errormessage.textContent = 'Please enter a username and password';
        return;
    };

    // login(username, password);
    if (username === 'user' && password === 'user') {
        window.location.href = '../pages/homepage.html';
    } else {
        // alert('Invalid Credentials');
        errormessage.textContent = 'Invalid Credentials';
        setTimeout(() => {
            errormessage.style.display = 'none';
        }, 2000);
        usernameInput.value='';
        passwordInput.value='';
    };
});

const regform = document.getElementById('regform');
const unInput = document.getElementById('un');
const pwInput = document.getElementById('pw');
const emailInput = document.getElementById('email');

regform.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = unInput.value;
    const password = pwInput.value;
    const email = emailInput.value;

    if (!username || !password || !email) {
        alert('Please enter a username, password and email');
        return;
    };

    if (username === 'user' && password === 'user' && email === 'user@gmail.com') {
        window.location.href = '../pages/homepage.html';
    } else {
        alert('Invalid Credentials');
    };
});