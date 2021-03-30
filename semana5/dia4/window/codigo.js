//windows

window.location

console.log(window.location)

console.log("Esta es la URL de la pagina: ",location.href)
console.log("Este es el hostname: ",location.hostname)
console.log("Este es mi Host: ",location.host)
console.log("Este es mi path(ruta/camino): ",location.pathname)
console.log("ste es le protocolo que uso: ",location.protocol)


let contador = 0
let intervalo = setInterval(()=>{
    console.log("Hola mundo")
    console.log(contador)
    contador++

if(contador ===6){
    clearInterval(intervalo);
}
},2000);


setTimeout(()=> {
    console.log("esta es la ejecucion de timeout")
})




//localStorage
//almacenamiento local

windows.localStorage.setItem("contrasenha","1234")

let contrra = windows.localStorage.getItem("contrasenha")
console.log(contra)

let profile = window.localStorage.setItem("tema","claro")
window.localStorage.removeItem("contra")
window.localStorage.clear()






