//logica de manipulación de panels
//es el mismo codigo que hicimos en clase para cambiar de panel
    const tabs = document.querySelectorAll('[role="tab"]')
    const paneles = document.querySelectorAll('[role="tabpanel"]')

    tabs.forEach(element => {
        element.addEventListener('click', ()=> {
            tabs.forEach( t => {
                t.setAttribute('aria-selected', 'false')
                 paneles.forEach( p =>{
                        p.setAttribute('hidden', '')
                    });
                });
                element.setAttribute('aria-selected', 'true')
                const panelId = element.getAttribute('aria-controls')
        document.getElementById(panelId).removeAttribute('hidden')
    });
});