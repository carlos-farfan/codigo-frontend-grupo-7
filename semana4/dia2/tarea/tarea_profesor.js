const select = document.querySelector("select");
const parrafo = document.querySelector("p");
const h1 = document.querySelector("h1");

select.addEventListener("change", mostrarCanciones)

function mostrarCanciones() {
    let eleccion = select.value;
    let contenido = electio.value;


    if(eleccion === "mr-tambouri"){
        titulo.texContent = contenido;
        parrafo.textContent = "";
    }
    else if(eleccion === "i-want-to-break-free"){
        titulo.texContent = "I want to break free";
        parrafo.textContent = "";
    }
}


