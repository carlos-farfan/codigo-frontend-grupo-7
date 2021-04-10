//operaciones aritmeticas
//y modulo el resto de una division)



/* let suma = 4 + 5

let resta = 6 - 3

let multiplicacion = 8 * 9

let division = 100 / 4

let modulo = 6 % 2

let precedencia_aritmetica = ((a+b * c) / d)**2) */
/* 
function binomioCuadrado(a, b) {
    return a ** 2 + 2 * a * b + b ** 2;


}
console.log(formula(2, 3));

 */


//Condicionales if - else if

/* 

let a = 25

if (a === 25) {
    console.log("Los numeros son iguales")

} else if (a === 34) {
    console.log("No quevalente a 34")
} else {
    console.log("Comparacion no valida");
}

 */

//operadores ternarios

let nombre = "josue"

let evaluaCondicion =
    nombre === "Josue" ? "Si se llama asi" : "Hey! te equivocaste de nombre";

let numero = 3

let evaluaNumeromagico =
    numero === 4
    ? "hey! lo encontraste"
    : numero === 5
    ? "efectivamente es el 5"
    : "sigue intentanmdo";

    if(numero === 4){
        console.log("hey! lo encontraste");
    }

    if (numero === 5){
        console.log("Hey! encontraste al 5");
    }else{
        console.log("Sigue intentando")
    }


//Switch-case
Let numeroParoImpar = 4

switch (numeroParoImpar){
    case 4:
        console.log("Numero par");
        break;
    case 5:
    console.log("Numero impar");
    break;
    case 8:
    console.log("Numero par");
    break;
    case 15:
    console.log("Numero impar");
    break;
    case 24:
    console.log("Numero par");
    break;
    case 25:
    console.log("Numero impar");
    break;


}

switch (menuDelDia){
    case "Lunes":
        console.log("Arroz con pollo");
        break;
    case "Martes":
        console.log("Letejas con pescado");
        break;
    case "Miercoles":
        console.log("pollo a la olla");
        break;
    case "Jueves":
        console.log("arroz con pollo");
        break;
    case "Viernes":
        alert("Oferta hoy viernes con postre");
        console.log("Lomo saltado + postre");
        break;
}



//Arreglos - Array

let arrayDeNumeros = [1,2,3,4,5]

let arrayDeNombres = ["Marco", "Polo", "Raul", "Andrea", "Jimena"]

let arrayDeUsuarios = [
    {nombre: "Paul", edad:21, colorFav:"verde"},
    {nombre: "Marie", edad:31, colorFav:"azul"},
    {nombre: "Jhon", edad:16, colorFav:"rojo"},
    {nombre: "Carla", edad:51, colorFav:"dorado"},
    {nombre: "Paula", edad:11, colorFav:"verde"},
    {nombre: "Mario", edad:41, colorFav:"azul"},
    {nombre: "Jhoana", edad:9, colorFav:"rojo"},
    {nombre: "Carlos", edad:41, colorFav:"dorado"},
    {nombre: "Paulina", edad:2, colorFav:"verde"},
    {nombre: "Marcos", edad:65, colorFav:"azul"},
    {nombre: "Jhonatan", edad:11, colorFav:"rojo"},
    {nombre: "Jimena", edad:71, colorFav:"dorado"},
];

/* let elemento = arrayDeUsuarios[0].nombre;
for (elemento in arrayDeUsuarios){
    console.log(elemento)
}

for (let i = 0 ; i <arrayDeUsuarios.length; i++){
    console.log(arrayDeUsuarios[i]);
} */


let colores = {
    azul:0,
    verde:0,
    rojo:0,
    dorado:0
}

let edades = {
    menorOIgualA15:0,
    mayorOIgualA50:0,
}

let resultadosFinales ={
    resultado1:0,
    resultado2:0
}

let totalUsuarios = 0

for (usuarios in arrayDeUsuarios){
    switch (usuario.colorFav){
        case "azul":
            colores.azul +=1;
            if(usuario.edad <=15){
                edades.menorOIgualA15 += 1;
                resultados
            }else if (usuario.edad >= 50){
                edades.mayorOIgualA50 += 1;
            }
            break;
        case "verde":
            colores.verde +=1;
            if(usuario.edad <=15){
                edades.menorOIgualA15 += 1;
            }else if (usuario.edad >= 50){
                edades.mayorOIgualA50 += 1;
            }
            break;
        case "rojo":
            colores.rojo +=1;
            if(usuario.edad <=15){
                edades.menorOIgualA15 += 1;
            }else if (usuario.edad >= 50){
                edades.mayorOIgualA50 += 1;
            }
            break;
        case "dorado":
            colores.dorado +=1;
            break;            
        default:
            break;    
    }





    totalUsuarios += 1



}





