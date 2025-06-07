window.addEventListener('DOMContentLoaded', function() {
                            loadXMLDoc();
});

function loadXMLDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      const xmlDoc = xhttp.responseXML;
      const miembros = xmlDoc.getElementsByTagName("miembro");
      mostrarMiembros(miembros);
    }
    xhttp.open("GET", "info-elenco.xml");
    xhttp.send();
  }
  
  function mostrarMiembros(miembros) {
    let table = "<tr><th>Nombre</th><th>Papel</th><th>Descripcion</th></tr>";
    for (let i = 0; i < miembros.length; i++) {
      let nombre = "";
      let papel = "";
      let descripcion = "";
  
      const miembro = miembros[i];
  
      const nombreElem = miembro.getElementsByTagName("nombre")[0];
        nombre = nombreElem.textContent;
        const papelElem = miembro.getElementsByTagName("papel")[0];
        if (papelElem) {
            papel = papelElem.textContent;
        }
  
      const descripcionElem = miembro.getElementsByTagName("descripcion")[0];
      if (descripcionElem) {
        descripcion = descripcionElem.textContent;
      }
  
      table += `<tr class="tabla-elenco" tabindex="0">
                  <td>${nombre}</td>
                  <td>${papel}</td>
                  <td>${descripcion}</td>
                </tr>`;
    }
    document.getElementById("demo").innerHTML = table;
  }