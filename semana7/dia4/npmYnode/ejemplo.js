console.log("Hola amigos de codiGo")

const lista = require("./array")

lista.map((elemento)=>{
    console.log(elemento)
})


let cowsay = require("cowsay")

console.log(cowsay.say({
    text:"Hola amigos de codigo !!!.........",
    e : "oO",
    T : "U"
}))