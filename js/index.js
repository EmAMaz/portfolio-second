const formNombre = document.getElementById("nombre");
const formEmail = document.getElementById("email");
const formAsunto = document.getElementById("asunto");
const formMensaje = document.getElementById("mensaje");
const form = document.getElementById("formulario");

form.addEventListener("submit", e=>{
    e.preventDefault()
    if(formNombre.value.length > 50){
        alert("Nombre muy largo");
    }
    if(formAsunto.value.length > 50){
        alert("Asunto muy largo");
    }
    if(formMensaje.value.length > 300){
        alert("Mensaje muy largo");
    }
    var nombre = formNombre.value;
    var email = formEmail.value;
    var asunto = formAsunto.value;
    var mensaje = formMensaje.value;
    
    console.log("Soy " + nombre + " te escribo por: " + asunto + mensaje + "Este es mi email: " + email)
    
})

const buttonMenu = document.querySelector(".button-menu");
const containerMenu = document.querySelector(".container-menu");
const lista_enlaces = document.querySelector(".lista-enlaces");
const lista_redes = document.querySelector(".lista-redes");


buttonMenu.addEventListener("click" , () => {
    lista_enlaces.classList.toggle("nav-menu_visible")
    lista_redes.classList.toggle("nav-menu_visible")
    
})
