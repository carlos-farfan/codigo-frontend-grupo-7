//Clases

//Las clases en js son funcioners, con sintaxis especiales, pero siguen siendo funciones


//funcion
const func = function (){}

//clase
const clase = class{}

console.log(Object.getPrototypeOf(func))
console.log(Object.getPrototypeOf(clase))


const constructorDeUnaFuncion = new func()

const clase2 = new clase()





