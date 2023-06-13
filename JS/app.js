// Asignar la clase "activo" a la etiqueta nav en HTML
const button = document.querySelector('.btn_hamburger');
const nav    = document.querySelector('.head_nav');

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
});


// Cerrar el menu hamburguesa (nav) al hacer click en uno de sus elementos

const navInicio = document.querySelector('#navInicio');
const navProyectos = document.querySelector('#navProyectos');
const navContactame = document.querySelector('#navContactame');


navInicio.addEventListener('click', cerrarMenu); 
navProyectos.addEventListener('click', cerrarMenu); 
navContactame.addEventListener('click', cerrarMenu); 

function cerrarMenu (){ 
    nav.classList.remove("activo");
}