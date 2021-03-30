//Funciones

function sumar(numero1,numero2){
    let total = numero1 + numero2;
    console.log(total)
    let poner_Html = document.write(`<h1>${total}</h1>`);
    return poner_Html;


}

function restar(numero1,numero2){
    console.log(numero1 - numero2);
    return numero1 - numero2;
}


function (numero1,numero2);{
    return numero1 * numero2
}

function ecu_cuadratica(a,b,c);{
    let discriminante = b ** 2 - 4*a*c;
    switch (discriminante){
        case 0:
            break;
        case discriminante:
    }
}


//recursividad
//bucle - while

let contador = 0;
while (contador >= 10) {
    console.log(x);
    x++;

}

function recursividad(x){
    if(x >=10){
            return;
    }
    console.log(x)

}


//typeof


const mi_peticion_de_servidor = [
    {
        nombre: "nombre1",
        edad:"35"
        altura:1.80
    },
    {
        nombre: "nombre2",
        edad:"22",
        altura:1.70,
    },
    {
        nombre: "nombre3",
        edad:"45"
        altura:1.85,
    },
];


function generarId(nombre,edad){
    return nombre + edad + 2
}

//generarId(mi_peticion_de_servidor[0].nombre,mi_peticion_de_servidor[0].edad)

console.log(
    generarId(mi_peticion_de_servidor[0].nombre,mi_peticion_de_servidor[0].edad)
);