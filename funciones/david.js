//Calcular mi edad

function calcularEdad() {
    // tomar este año como un número

    var date = new Date();
    var edad = date.getFullYear() - 1980;


    document.getElementById("miEdad").innerHTML = edad;
console.log(edad)
}
// Funcion boton desplegable HTML
function myFunctionhtml() {
    document.getElementById("ejercicios").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.boton-menu')) {
        var soluciones = document.getElementsByClassName("ejercicios-menu");
        var i;
        for (i = 0; i < soluciones.length; i++) {
            var abrir_soluciones = soluciones[i];
            if (abrir_soluciones.classList.contains('show')) {
                abrir_soluciones.classList.remove('show');
            }
        }
    }
}
// Funcion boton desplegable CSS

function myFunctioncss() {
    document.getElementById("ejercicios-css").classList.toggle("show-css");
}

window.onclick = function (event) {
    if (!event.target.matches('.boton-css')) {
        var soluciones = document.getElementsByClassName("ejercicios-css");
        var i;
        for (i = 0; i < soluciones.length; i++) {
            var abrir_soluciones = soluciones[i];
            if (abrir_soluciones.classList.contains('show-css')) {
                abrir_soluciones.classList.remove('show-css');
            }
        }
    }
}

// Funcion boton desplegable JS
function myFunctionjs() {
    document.getElementById("ejercicios-js").classList.toggle("show-js");
}

window.onclick = function (event) {
    if (!event.target.matches('.boton-js')) {
        var dropdown = document.getElementsByClassName("ejercicios-js");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show-js')) {
                openDropdown.classList.remove('show-js');
            }
        }
    }
}
