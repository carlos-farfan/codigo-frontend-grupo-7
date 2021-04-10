//Reduce

/* let nuemrosPares = [2,4,6,8]

let resultado = nuemrosPares.reduce((acumulador = 0,numero)=>{
    return acumulador + numero
})

console.log(resultado)
 */


//map

let numeroImpares = [1,3,5,7,9]
numeroImpares.map((numero)=>{
    console.log(numero * 10)
})

let numerosDecimales = (0.1,0.3,0.4,0.6);
numerosDecimales.forEach((numero)=>{
    console.log(`Mi numero decimal es : ${numero}`)
})


//find: nos permite hallar el primer elementos que coincida con la condicion


/* let arrayColores = ["azul", "verde", "rojo", "plateado"]

let colorSecreto = arrayColores.find(color => color === "plateado")

console.log(colorSecreto)
 */
let tesorosPerdidos = [
    {
      nombre: "cofre del tesoro",
      valor: 100000000,
      pais: "costa rica",
    },
    {
      nombre: "santo grial",
      valor: 1000000000,
      pais: "israel",
    },
    {
      nombre: "quipu",
      valor: 100000,
      pais: "peru",
    },

];

let tesoro_ok = tesorosPerdidos.find(tesoro => tesoro.nombre === "quipu")
console.log(tesoro_ok);

let tesoro =tesorosPerdidos.find((tesoro)=> tesoro.pais ==="peru")



for(tesoro in tesorosPeruanos){

}




tesorosPeruanos.map((tesoro)=> console.log(tesoro.nombres));




