const modal = document.querySelector('#modal');
const exit  = document.querySelector('.disable');
const showup = document.querySelector('.create-btn');
const modal_content =document.querySelector('.modal-content');
exit.addEventListener('click',()=>{
    modal.style.display = 'none';
})
showup.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(modal);
    modal.style.display = 'block';
    modal.style.display = "flex";
    modal.style.justifyContent = 'center'
})