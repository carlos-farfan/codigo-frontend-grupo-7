//
//SCOPE => Espacio dispónible que esta entre llaves
function ejemplo(){
    let texto ="texto inicial"

    function mostrarTexto(){
        alert(texto)
    }
    mostrarTexto()
}

ejemplo();



function crearFuncion(){
    let nombre = "Pablo";

    function mostrarNombre(){
        //SCOPE: El espacio disponible para poner codigo dentro de mi funcion
        alert(nombre);
    }
    //Equivalente:
    //mostrarNombre()
    //return;

    return mostrarNombre;
}

let llamrMiFuncion = CrearFuncion()
llamarMiFuncion();

suma (3,5)
/* 
let suma_primos = suma(3,5)
let suma_pares = suma(4,8)
 */

//CREAR FUNCION

functionsumadoraDeNumeros(x){
    return function(y){
        return x + y
    };
/*     return (y) => x + y
 */}

let suma5 =sumadoraDeNumeros(5);

console.log(suma5)
/* console.log(suma5(2)); */
}