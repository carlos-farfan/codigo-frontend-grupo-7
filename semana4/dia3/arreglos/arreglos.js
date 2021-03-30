

/* 
let arreglo = [1,2,3,4,5];

let alumnos_codigo = ["pepito", "maria",];

let mi_suerte = [true,false,true,true,false];

let varios_elementos = ["josue", 24, "solter", 1.70, true, undefined];

varios_elementos [0]; //"Josue"
varios_elementos [1]; //"24"
varios_elementos [2]; //"soltero"
varios_elementos [3]; //"1.70"
varios_elementos [4]; //"True"

varios_elementos [100]; //"undefined"

varios_elementos.length */



let seleccionar = document.querySelector("select");
let titulo = document.querySelector('h1');
let parrafo = document.querySelector('p');

seleccionar.addEventListener('change', letraCancion);

funcion letraCancion(){

    let eleccion = seleccionar.valvue;

    switch(eleccion){
        case "oasis":
            titulo.textContent = "Don't Go Away";
            parrafo.textContenet = letras [0];
            break;
        case "ed-sheeran":
            titulo.textContent = "Thinking Out Loud";
            parrafo.textContenet = letras [1];
            break;
            
        case "u2":
            titulo.textContent = "Beautiful Day";
            parrafo.textContenet = letras [2];
            break;  
        case "bruno-mars":
            titulo.textContent = "When I Was Your Man";
            parrafo.textContenet = letras [3];
            break;
        case "coldplay":
            titulo.textContent = "yellow";
            parrafo.textContenet = letras [4];
            break;     
        default:
            titulo.textContent = ""
            parrafo.textContent = ""
    
    } 
} 





//voy a agregar un elemento al final de mi array
//Push [elemento que voy a agregar]

mi_arreglo.push("elemento5")
console.log(mi_arreglo[mi_arreglo.length-1]), "Este es mi nuevo elemento")


//voy a eliminar el ultimo elemento de mmi array
//hago uso del metoido pop

mi arreglo.pop()
console.loig(mi_arreglo[mi_arreglo.length-1], "Este es mi ultimo elemento")