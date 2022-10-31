var navegador1 = `  
    <div id="logo">
        <div class="imagen">
            <img class='logo' src="../IMG/animal-1299122_960_720.png" alt="FotoBDF">
        </div>
        <div class="encabezado">
        <h1>Mascotas G7</h1>
        `
var navegador2= `
    </div>
    </div>
    <nav id="botonera_principal">
        <ul class="btn-header">
            <li><a href="Perdidos.html">Perdidos</a></li>
            <li><a href="EnAdopcion.html">En Adopcion</a></li>
            <li><a href="Perdidos.html">Perdidos</a></li>
            <li><a href="SobreNosotros.html">Sobre Nosotros</a></li>
            <Li><a href="Contacto.html">Contacto</a></Li>
        </ul>
    </nav>
    
    `

document.getElementById("navegador").innerHTML = navegador1.concat(document.getElementById("navegador").innerHTML,navegador2);     