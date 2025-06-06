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