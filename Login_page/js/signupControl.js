const validate = document.getElementsByClassName("validate-field");
const name = document.querySelector("#name");
const button = document.querySelector(".form-button");
const surname = document.querySelector("#surname");
const radios = document.querySelectorAll('input[type="radio"]');
const gender_group = document.getElementsByClassName("gender-group-item");
button.addEventListener("click", (e) => {
    e.preventDefault();
    let allFieldFill = true;
    [...validate].forEach((element) => {
        if (element.value === "") {
            element.classList.add("isActive");
            console.log(element);
            allFieldFill = false;
        } else {
            element.classList.remove("isActive");

        }
    });
    let radioChecked = false;
    radios.forEach((radio) => {
        if (radio.checked) {
            radioChecked = true;
        }
    });

    // Add or remove "isActive" class from gender group based on radio button status
    if (radioChecked) {
        [...gender_group].forEach((gender) => {
            gender.classList.remove("isActive");
        });
    } else {
        [...gender_group].forEach((gender) => {
            gender.classList.add("isActive");
            allFieldFill = false;
        });
    }

    if(allFieldFill){
        location.href = 'https://www.facebook.com/'
    }
});
