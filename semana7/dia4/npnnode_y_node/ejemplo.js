console.log("Hola amigos")

const lista = require ("./array")

lista.map((elemento)=> {
    console.log(elemento)
});

let cowsay = require("cowsay");

console.log(cowsay.say({
    test:"Hola amigos de codigo!!! muuuuuuuuu",
    e: "oO",
    T: "U"
}));