console.log("Hola mundo!!!")

const libro = require ("./libros")

libros.map((libro)=>{
    console.log(libro);
});



//NPM Node packge manager - Gestor de paquetes de NODE


let cowsay = require("cowsay");

console.log(cowsay.say({
	text : "Hola amigos de Codigo",
	e : "oO",
	T : "U "
}));

// or cowsay.think()