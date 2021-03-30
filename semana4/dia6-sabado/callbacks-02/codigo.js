

/* function mostrarAlerta() {
    alert("Hola mundo");
}

const boton = document.querySelector("button");

/* boton.addEventListener("click", mostrarAlerta);
 */
/* 
boton.addEventListener("click", funcion(){
    alert("Hey!!! que tal?")
}) */




let segundos = 5;
function empezarCuentaAtras() {
    setInterval(function () {
        segundos--;
        if (segundos === 0) { clearInterval(segundos)};
        imprimirSegundos();
    }, 2000);
}

function imprimirSegundos() {
    console.log(segundos)
}

empezarCuentaAtras();