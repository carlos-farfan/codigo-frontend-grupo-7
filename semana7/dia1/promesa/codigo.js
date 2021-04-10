let promesa = new Promise((resolve, reject) => {
    //ejecutar algoritmo...

    if (condicion) {
        resolve("haz algo aca");

    } else {
        reject("no funciono");
    }
});


//Las promesas  tienen tres estados

//1. pendientes
//2. fue resuelta (se cumplio)
//3. fue rechazada (no se cumplio)

/* 
let sumar = function(x, y){
    return new Promise((resolve,reject) =>{
        let suma = x + y;
        if(suma){
            resolve(suma);
        }else{
            reject(Error("Hey!!, no es una suma valida"));
        }
    });
    
};

console.log(sumar(2, 3));




let restar = function(x, y){
    return new Promise((resolve,reject) =>{
        let resta = x - y;
        if(resta){
            resolve(resta);
        }else{
            reject(Error("Hey!!, no es una suma valida"));
        }
    });
    
};

console.log(restar(9, 5));

let multiplicar = function(x, y){
    return new Promise((resolve,reject) =>{
        let multiplicar = x * y;
        if(multiplicar){
            resolve(multiplicar);
        }else{
            reject(Error("Hey!!, no es una suma valida"));
        }
    });
    
};

console.log(multiplicar(5, 4));



let dividir = function(x, y){
    return new Promise((resolve,reject) =>{
        let dividir = x / y;
        if(dividir){
            resolve(dividir);
        }else{
            reject(Error("Hey!!, no es una suma valida"));
        }
    });
    
};

console.log(dividir(9, 3));




 */


let sumar = function (x, y) {
    return new Promise((resolve, reject) => {
        let suma = x + y;
        if (suma) {
            resolve(suma);
        } else {
            reject(Error("Hey!!, no es una suma valida"));
        }
    });

};

console.log(sumar(2, 3));




let restar = function (x, y) {
    return new Promise((resolve, reject) => {
        let resta = x - y;
        if (resta) {
            resolve(resta);
        } else {
            reject(Error("Hey!!, no es una suma valida"));
        }
    });

};


let multiplicar = function (x, y) {
    return new Promise((resolve, reject) => {
        let multiplicacion = x - y;
        if (multiplicacion) {
            resolve(multiplicacion);
        } else {
            reject(Error("Hey!!, no es una suma valida"));
        }
    });

};


let dividir = function (x, y) {
    return new Promise((resolve, reject) => {
        let division = x - y;
        if (division) {
            resolve(multiplicacion);
        } else {
            reject(Error("Hey!!, no es una suma valida"));
        }
    });

};


sumar(2, 2).then((resultadoSuma) => {
    return restar(resultadoSuma, 4)
}).then((resultadoResta) => {
    return sumar(resultadoResta, 7)
}).catch((error) => {
    return error
});




//Binomio


const binomio = (a, b) => {
    function parte1() {
        return new Promise((resolve, reject) => {
            let primerFactor = a ** 2
            primerFactor 
            ? resolve(primerFactor) 
            : reject(Error("No es operacion valida"));
    });
}

const binomio = (a, b) => {
    function parte1() {
        return new Promise((resolve, reject) => {
            let primerFactor = a ** 2
            primerFactor 
            ? resolve(primerFactor) 
            : reject(Error("No es operacion valida"));
    });
}




};
