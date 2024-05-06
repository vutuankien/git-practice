//Rgex Pattern
const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&*\(\)_+\-=\[\]\{\};':"\\|,.<>\/?])[a-zA-Z0-9!@#\$%\^&*\(\)_+\-=\[\]\{\};':"\\|,.<>\/?]{6,}$/;
const usernameRegex = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/;
const emialRegex = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/

const username_log = document.querySelector("#username");
const password_log = document.querySelector("#password");
const button_log = document.querySelector(".btn");
const messagePassword = document.querySelector(".message-password");
const usernameMessage = document.querySelector(".message-username");

button_log.addEventListener("click", () => {
    if (password_log.value.match(passwordRegex)) {
        messagePassword.innerText = "";
        messagePassword.classList.remove("isActive");
        console.log(messagePassword);
    } else {
        messagePassword.innerText = "Wrong Password";
        messagePassword.classList.add("isActive");
        console.log(messagePassword);
    }

    if (username_log.value.match(usernameRegex)) {
        usernameMessage.innerText = "";
        usernameMessage.classList.remove("isActive");
        console.log(usernameMessage);
    } else {
        usernameMessage.innerText = "Wrong Username";
        usernameMessage.classList.add("isActive");
        console.log(usernameMessage);
    }
});

//registation form validation
const username_res = document.querySelector("#username-regis");
const password_res = document.querySelector("#password-regis");
const button_res = document.querySelector(".btn_res");
const email = document.querySelector('#email');
const passwordMessage_res = document.querySelector(".message-password-regis");
const usernameMessage_res = document.querySelector(".message-username-regis");
const emailMessage  = document.querySelector('.message-email-regis');

button_res.addEventListener("click", () => {
    //validate password
    if (password_res.value.match(passwordRegex)) {
        passwordMessage_res.innerText = "";
        passwordMessage_res.classList.remove("isActive");
        console.log(passwordMessage_res);
    } else {
        passwordMessage_res.innerText = "Wrong Password";
        passwordMessage_res.classList.add("isActive");
        console.log(passwordMessage_res);
    }

    //validate username
    if (username_res.value.match(usernameRegex)) {
        usernameMessage_res.innerText = "";
        usernameMessage_res.classList.remove("isActive");
        console.log(usernameMessage_res);
    } else {
        usernameMessage_res.innerText = "Wrong Username";
        usernameMessage_res.classList.add("isActive");
        console.log(usernameMessage_res);
    }
//Kien392004@
    //validate Email
    if(email.value.match(emialRegex)){
        emailMessage.innerText = "";
        emailMessage.classList.remove('isActive');
        console.log(emailMessage);
    }else{
        // email.value = '';
        emailMessage.innerText = "Email should be like abc@gmail.com";
        emailMessage.classList.add('isActive');
        console.log(emailMessage);
    }
});

//switch form
const login = document.querySelector(".login");
const register = document.querySelector(".signup");
const form_login = document.querySelector("#form-login");
const form_register = document.querySelector("#form-register");
register.addEventListener("click", () => {
    form_login.style.display = "none";
    form_register.style.display = "block";
});

login.addEventListener("click", () => {
    form_login.style.display = "block";
    form_register.style.display = "none";
});
