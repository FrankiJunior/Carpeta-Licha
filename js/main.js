window.onload = function () {
    let boton = document.getElementById("iconoID");
    let enlaces = document.getElementById("enlaces");
    let contador = 0;
    boton.addEventListener("click", hola);

    function hola() {
        alert("Hola");
    }
}
