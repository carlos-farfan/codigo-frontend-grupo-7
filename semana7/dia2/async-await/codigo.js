/* //funcion asincrona

async function fun_asincrona() {
    return 23;
}
//funcion flecha asincrona
const otraFuncion = async () => 42;


fun_asincrona().then(valor => {
    console.log("Este es el valor de la promesa", valor);
});

const valor = otraFuncion();
console.log(valor);

async function obtenerValor() {
    const value = await otraFuncion();
    return value;
}
console.log(obtenerValor);



let sumar = (x, y) => {
    return new Promise((resolve, reject) => {
        let suma = x + y;
        if (suma) {
            resolve(suma);
        } else {
            reject(Error("Hey!!, no es una suma valida"));
        }
    });

};


const sumaNum = async (a, b) => {
    try {
        return await a + b;
    } catch {
        return error("Hey!! no es una operacion valida");
    }
};

sumaNum(2, "r").then((Valor) => {
    console.log(valor);
});





//////////////////////////////////////



const binomio = async (a, b) => {
    async function primerFactor() {
        let primerFactor = a ** 2;
        primerFactor ? primerFactor : Error("No es una operacion valida-parte1");
    }
    async function segundoFactor() {
        let segundoFactor = 2 * a * b;
        segundoFactor ? segundoFactor : Error("No es una operacion valida-parte1")
    }
    async function tercerFactor() {
        let tercerFactor = b ** 2;
        tercerFactor ? tercerFactor : Error("No es una operacion valida-parte1")
    }

    const resultado1 = await primerFactor();
    const resultado2 = await segundoFactor();
    const resultado3 = await tercerFactor();
    return `Resultado: ${resultado1 + resultado2 + resultado3}`;
};
console.log(binomio(2, 3))





 */

/* 

async function mostrarNombres(
    primerNombre,
    segundoNombre,
    apellidoPaterno,
    apellidoMaterno
    ) {
    async function devolverPrimerNombre() {
        return primerNombre;
    }
    async function devolverSegundoNombre() {
        return segundoNombre;
    }
    async function devolverApellidoPaterno() {
        return apellidoPaterno;
    }
    async function devolverApellidoMaterno() {
        return apellidoMaterno;
    }

    const pNomb = await devolverPrimerNombre();
    const sNomb = await devolverSegundoNombre();
    const apPat = await devolverApellidoPaterno();
    const apMat = await devolverApellidoMaterno();

    const resultado = async () =>
    `Mi nombre es : ${pNombre} ${sNombre} ${apPat} ${ apMat}`;

    return await resultado
    
    sole.log(mostrarNombres("Carlos", "Emanuel", "Farfan", "Michilot"), "Promesa nombre");


}; */





const trinomio = async (a,b,c)=>{
    async function primerFactor() {
        let primerFactor = a**2;
        return primerFactor
        ? primerFactor 
        : Error("No es una operacion valida-parte1");
    }
    async function segundoFactor() {
        let segundoFactor = b**2;
        return segundoFactor 
        ? segundoFactor 
        : Error("No es una operacion valida-parte1")
    }
    async function tercerFactor() {
        let tercerFactor = c**2;
        return tercerFactor 
        ? tercerFactor
        : Error("No es una operacion valida-parte1")
    }
    async function cuartoFactor() {
        let cuartoFactor = 2*a*b;
        return cuartoFactor 
        ? cuartoFactor 
        : Error("No es una operacion valida-parte1")
    }
    async function quintoFactor() {
        let quintoFactor = 2*b*c;
        return quintoFactor
        ? quintoFactor 
        : Error("No es una operacion valida-parte1")
    }
    async function sextoFactor() {
        let sextoFactor = 2*a*c;
        return sextoFactor 
        ? sextoFactor 
        : Error("No es una operacion valida-parte1")
    }



    const resultado1 = await primerFactor();
    const resultado2 = await segundoFactor();
    const resultado3 = await tercerFactor();
    const resultado4 = await cuartoFactor();
    const resultado5 = await quintoFactor();
    const resultado6 = await sextoFactor();

    return `Resultado: ${resultado1 + resultado2 + resultado3 + resultado4 + resultado5 + resultado6}`;
}
console.log(trinomio(2,3,4));


