//destructuracion

let apellidos = ["ramnos", "meza", "vargas"];

let primerApellido = apellidos[0]

let segundoApellido = apellidos[1]

let tercerApellido = apellidos[2]

//console.log(primerApellido);


let [Apellido1, Apellido2, Apellido3] = apellidos;
console.log(Apellido1);


let [manzana, pera] = ["melocoton", "pera"];
console.log(manzana);

let [saludo,,,nombre] = ["Hola", "yo", "soy", "dayanita"]



let [a,...rest] = ["a", "e", "i", "o", "u"]
console.log(a)
console.log(rest)

function obtenerNombrePais(){
    return ["peruano", "32 millones", "pollito a la brasa", "Peru"];

}
let [gentilicio1,poblacion1,platoBandera,nombre_1] = obtenerNombrePais()
console.log(gentilicio1)



let peru = {
    nombreOf:"Republica del Peru",
    getilicio:"Peruano",
    poblacion:"33 millones"
};

//let nombrepais = Peru.nombreOf

/* let {nonmbreOf, gentilicioP, poblacionP} = peru;
console.log(nombreP) */

////////////////////////////////


/* let{nombreOf, gentilicioB, poblacionB} = {
    nombreOf: "Brazil",
    gentilicioB: "Brasileño",
    poblacionB: "211 milñlones",

};
let {nombreOf, gentilicioB, poblacionB} = brazil;
console.log(nombreOf) */

////////////////////////////////////


let arrayDeUsuarios = [
    { nombre: "Paul", edad: 21, colorFav: "verde" },
    { nombre: "Marie", edad: 31, colorFav: "azul" },
    { nombre: "Jhon", edad: 16, colorFav: "rojo" },
    { nombre: "Carla", edad: 51, colorFav: "dorado" },
    { nombre: "Paula", edad: 11, colorFav: "verde" },
    { nombre: "Mario", edad: 41, colorFav: "azul" },
    { nombre: "Jhoana", edad: 9, colorFav: "rojo" },
    { nombre: "Carlos", edad: 41, colorFav: "dorado" },
    { nombre: "Paulina", edad: 2, colorFav: "verde" },
    { nombre: "Marcos", edad: 65, colorFav: "azul" },
    { nombre: "Jhonatan", edad: 11, colorFav: "rojo" },
    { nombre: "Jimena", edad: 71, colorFav: "dorado" },
  ];


  let [obj1,,,,,,,,,,obj2] = arrayDeUsuarios;
  console.log(obj1.nombre, "OBJETO 1");
  console.log(obj2.nombre, "OBJETO 1");



