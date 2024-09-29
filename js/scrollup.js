// Obtener el botón
var btnVolverArriba = document.getElementById("btnVolverArriba");

// Cuando el usuario baje 20px desde la parte superior de la página, mostrar el botón
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnVolverArriba.style.display = "block";
    } else {
        btnVolverArriba.style.display = "none";
    }
}

// Cuando el usuario haga clic en el botón, volver arriba suavemente
btnVolverArriba.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
