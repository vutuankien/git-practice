//regex
const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&*\(\)_+\-=\[\]\{\};':"\\|,.<>\/?])[a-zA-Z0-9!@#\$%\^&*\(\)_+\-=\[\]\{\};':"\\|,.<>\/?]{6,}$/;
const usernameRegex = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/;
const emialRegex =
    /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;
const form = document.querySelector("#form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const loginBtn = document.querySelector("#login_btn");

loginBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(email.value === 'admin' && password.value === 'admin'){
        location.href = "https://www.facebook.com/";
    }else{
        location.href = "loginFail.html";
    }
})
