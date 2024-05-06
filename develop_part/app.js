function validateLoginForm() {
    const username = document.querySelector("#username");
    const password = document.querySelector("#password");
    const button = document.querySelector(".btn");
    const message = document.querySelector(".-regis");
    const usernameMessage = document.querySelector(".message-username");

    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&*\(\)_+\-=\[\]\{\};':"\\|,.<>\/?])[a-zA-Z0-9!@#\$%\^&*\(\)_+\-=\[\]\{\};':"\\|,.<>\/?]{6,}$/;
    const usernameRegex = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/;
    button.addEventListener("click", () => {
        if (password.value.match(passwordRegex)) {
            message.innerText = "";
            message.classList.remove("isActive");
            console.log(message);
        } else {
            message.innerText = "Wrong Password";
            message.classList.add("isActive");
            console.log(message);
        }

        if (username.value.match(usernameRegex)) {
            usernameMessage.innerText = "";
            usernameMessage.classList.remove("isActive");
            console.log(usernameMessage);
        } else {
            usernameMessage.innerText = "Wrong Username";
            usernameMessage.classList.add("isActive");
            console.log(usernameMessage);
        }
    });
}
function validateRegisterForm() {
    const username = document.querySelector("#username-regis");
    const password = document.querySelector("#password-regis");
    const button = document.querySelector(".btn");
    const message = document.querySelector(".message-password-regis");
    const usernameMessage = document.querySelector(".message-username-regis");

    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&*\(\)_+\-=\[\]\{\};':"\\|,.<>\/?])[a-zA-Z0-9!@#\$%\^&*\(\)_+\-=\[\]\{\};':"\\|,.<>\/?]{6,}$/;
    const usernameRegex = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/;
    button.addEventListener("click", () => {
        if (password.value.match(passwordRegex)) {
            message.innerText = "";
            message.classList.remove("isActive");
            console.log(message);
        } else {
            message.innerText = "Wrong Password";
            message.classList.add("isActive");
            console.log(message);
        }

        if (username.value.match(usernameRegex)) {
            usernameMessage.innerText = "";
            usernameMessage.classList.remove("isActive");
            console.log(usernameMessage);
        } else {
            usernameMessage.innerText = "Wrong Username";
            usernameMessage.classList.add("isActive");
            console.log(usernameMessage);
        }
    });
}
validateLoginForm();
validateRegisterForm();
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
