/* Cuando hago CLICK .button, .nav TOGGLE 'activo' */
const button = document.querySelector('.btn_hamburger')
const nav    = document.querySelector('.head_nav')

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
})


/* jQuery : Enlazar jQuery*/
/* $('.button').on('click',()=>{
    $('.nav').toggleClass('activo')
}) */