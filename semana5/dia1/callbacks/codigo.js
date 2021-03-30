//objetos

//es una coleccion de propiedades

// que es una propiedad?

//una propiedad esta compuesta de llaves(key) y valores (value)

//es un tipo de datos

let array_de_ejemplo = [1, 2, 3, 4, 5, 6];

MiObjeto.nombreDeLaPropiedad // asi es como yo accedo a un apropiead en mi objeto

let MiObjeto2 : {
    propiedad1 : ".......",
    propiedad2 : ".......",
    propiedad3 : ".......",
    propiedad4 : 4,
}

MiObjeto2.propiedad1000   //cuando yo vaya a imprimer esto, valdrá undefine


MiObjeto["propiedad1"]  //este es valor...... (solo acceder a mi valor)

MiObjeto["propiedad1"] = 45
console.log(MiObjeto)





let MiObjeto = new Object();

MiObjeto.propiedad1 = "es un objeto"

MiObjeto.propiedad2 = "5"

MiObjeto.propiedad3 = "true"

MiObjeto.propiedad4 = "miObjeto2"

MiObjeto.propiedad5 = "true"





function Carro(marca,modelo,anho){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}
let mechitaBenz = new Carro("Mechita benz","el ultimo", 2077)
mechitaBenz.aniomechitaBenz.marcamechitaBenz.modelo