
//Objeto Date- para tabajar con fechas(tiempo)

const ahora =new Date();

console.log(ahora)
//getTime() me devuleve la cantidad de milisegundos que pasaron desde 1 de enero de 1970 
const milisegundos = ahora.getTime();

console.log(milisegundos)

//fecha cero

const fechaCero = new Date(0)
console.log(fechaCero)

const fechaUniversal = Date.UTC(ahora)


//51 (cantidad de años desde 1970) x 31557600000 (cantidad de milisegundos en un año)

const fechaCeroConMilisegundos = new Date (21557600000 * 51)
console.log(fechaCeroConMilisegundos)

const fechaString = new Date("July 28 1821 12:00");
console.log(fechaString)



const anho = fechaString.getFullYear()

const mes = fechaString.getMonth()

const diaMes = fechaString.getDate()//0-31

const diaSemana = fechaString.getDay() //0-6


fechaString.setFullYear("1824")
console.log(fechaString.getFullYear())


function obtenerEdad(anhoNacimiento){

    const fechaActual = new Date();
    const anho = fechaActual.getFullYear()
    return (anho - anhoNacimiento);
}

console.log(obtenerEdad(1996))




//tarea es : hacer una funcion  a la que le paso la fecha  de esta manera(en un string en ingles)
// por ejemplo : July 28 1821 12:00
// deben retornar cuantos dias , meses , y años pasaron desde esa fecha




function fechaCompleta (fechaNacimiento){   //fecha nacimiento es tipo string, no soporta metodos como getFullYear()
  //objeto que  almacenar mi resultado
    let cumple = {
        dia:0,
        mes:0,
        anho:0,
    };

    //declaro la fecha actual
    const fechaActual = new Date();
    fechaNacimiento = New Date(fechaNacimiento);
    console.log(fechaNacimiento)

    const anho = Math.abs(+(fechaActual.getFullYear() - fechaNacimiento.getFullYear()))
    const mes = fechaNacimiento.getMounth() +1;
    const dia = fechaNacimiento.getDate();

    cumple.anho = anho;
    cumple.mes = mes;
    cumple.dia = dia

    return `
    dia: ${cumple.dia},
    mes: ${cumple.mes},
    anho: ${cumple.anho}
    `;

}

const miCumple = fechaCompleta("July 17 1996 12:00")
console.log(miCumple)








