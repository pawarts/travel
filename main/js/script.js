let wrapper = document.getElementById('wrapper');
let login = document.getElementById('login');
let signup = document.getElementById('signup');
let back_signup = document.getElementById('back_signup');
let back_login = document.getElementById('back_login');


login.addEventListener('click', () => {
    wrapper.style.left = '0';
});
back_login.addEventListener('click', () => {
    wrapper.style.left = '-100vw';
});
signup.addEventListener('click', () => {
    wrapper.style.left = '-200vw';
});
back_signup.addEventListener('click', () => {
    wrapper.style.left = '-100vw';
})


navigator.virtualKeyboard.overlaysContent = true
