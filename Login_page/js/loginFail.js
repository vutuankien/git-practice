const forget_link = document.querySelector('.forget-text');
forget_link.addEventListener('click',(e) =>{
    e.preventDefault();
    console.log(forget_link);
    location.href = 'forgotPassword.html';
})