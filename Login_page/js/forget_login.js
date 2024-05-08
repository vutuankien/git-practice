const email = document.querySelector('#email');
const password = document.querySelector('#password');
const loginBtn = document.querySelector('.header-login--btn');
const forget_link = document.querySelector('.forgotten_link');
const search = document.querySelector('.search');
const textField = document.querySelector('#text-field');
const message = document.querySelector('.message');
loginBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(email.value === 'admin' && password.value === 'admin'){
        location.href = "https://www.facebook.com/";
    }else{
        location.href = "loginFail.html";
    }
})
forget_link.addEventListener('click',(e)=>{
    e.preventDefault();
    window.open("forgotPassword.html", "_blank");
})

search.addEventListener('click',(e)=>{
    console.log("Click!");
    console.log(textField);
    console.log(message);
    e.preventDefault();
    if(textField.value === ''){
        message.style.display = 'block';
    }else{
        message.style.display = 'none'
    }
})