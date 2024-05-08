

const validate = document.getElementsByClassName('validate-field');
const button = document.querySelector('.form-button');
button.addEventListener('click',(e)=>{
    e.preventDefault();
    [...validate].forEach((element) => {
        element.classList.add("isActive")
        console.log(element);
    });
})
