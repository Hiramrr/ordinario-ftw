//es el mismo codigo que hicimos en clase para mostrar el menu
//solo que aqui yo añadi un header y le cambio su clase de css para expandirlo y quede mas bonito
const menu = document.getElementById("menu");
const header = document.getElementById("header");
    menu.addEventListener("click", () => {
        let enlaces = document.getElementById("main-nav");
        console.log(enlaces)
        console.log(enlaces.getAttribute("hidden"))

        if (enlaces.getAttributeNames().includes("hidden")) {
            enlaces.removeAttribute("hidden");
            menu.setAttribute("aria-expanded", "true");
            header.setAttribute("class", "headerExtendido")
        } else {
            enlaces.setAttribute("hidden", "");
            menu.setAttribute("aria-expanded", "false");
            header.setAttribute("class", "header")
        }
});

//este listener muestra una alerta en el navegador cuando se envia un comentario
document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('form-comentarios');
    
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('¡Gracias por tu opinión!');
        formulario.reset();
    });
});