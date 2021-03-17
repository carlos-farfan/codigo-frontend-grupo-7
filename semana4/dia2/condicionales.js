// CONDICIONALES

//1.CONDICION BASICA
// si (la condición es verdadera) {
// // hago algo aca
// }demás{
// // hago otra cosa aca (si la condición es falsa)
//}

//2.CONDICION MULTIPLE
// if (se cumple esta condicion) {
// // mi codigo que se ejecuta si mi condicion es verdadera
//} else if (si se cimple esta otra condicion) {
// // mi codigo si se ejecuta esta otra condicion
//} else if (si se cumple esta otra condicion) {
// // mi codigo si se ejecuta esta otra condicion
// }demás{
// // si ninguna condicion se cumple
//}

// PSEUDOCODIGO
// SI (una condición es cierta) {
// ejecuto un codigo aqui
//} SINO {
// ejcuto aqui un codigo si mi condicion es falsa
//}

// si (condicion) {
// // hago algo aca
// }demás{
// // hago otra cosa
//}

// PSEUDOCODIGO-MULTIPLE-CONDICIONAL

// SI (CONDICION1 ES VERDADERA) {
// HAGO ESTO QUE ESTA DENTRO DE ESTE PAR DE LLAVES
//} SINO SI (CONDICION2 ES VERDADERA) {
// HAGO ESTE OTRO CODIGO QUE ESTA DENTRO DE ESTE PAR DE LLAVES
//} SINO SI (CONDICION3 ES VERDADERA) {
// HAGO ESTE OTRO CODIGO
//} SINO SI (CONDICION3 ES VERDADERA) {
// HAGO ESTE OTRO CODIGO
//} SINO SI (CONDICION3 ES VERDADERA) {
// HAGO ESTE OTRO CODIGO
//} SINO SI (CONDICION3 ES VERDADERA) {
// HAGO ESTE OTRO CODIGO
//} SINO {
// SI NINGUNA DE MIS CONDICIONES FUE VERDADERA ACA EJECUTO UN CODIGO
//}



let cancion = "u2"

if (cancion  === "vico_c" ) {
    console.log ("Quitate tu pa' ponerme yo Vamos a ver aquí quien es quien")
} else  if (cancion  ===  "daddy" ) {
    console.log ("Le dio hasta abajo y se le vio el gistro")
}else  if (cancion  ===  "oasis" ) {
    console.log ("oday is gonna be the day")
}else  if (cancion  ===  "u2" ) {
    console.log ("See the stone set in your eyes")
}





//FUNCIONES

function miFuncion (){
    console.log("Mi primera funcion es lo mejor del mundo!!!")
    console.log("Las funciones me sirven para no repetir el codigo!")
    console.log("LAs funciones me ayuddan a escribir mejor el codigo")

}

/* miFuncion()

function imprimeMiNombre(nombre){
    if(miNOmbre === ""){
        miNombre = "Debes ingresar un nombre valido!. gracias"
    } 
    
    
    let miNombre = `Mi nombre es ${nombre}.`
    
    
    return miNombre;
}

//con un parametro
imprimeMiNombre("Carlos")

//sin
 */


function printName(name) {
    if (name === "") {
      let miNombre = "Debes ingresar un nombre valido";
      return miNombre;
    } else {
      let miNombre = `Mi nombre es ${name}.`;
      return miNombre;
    }
  }
  console.log(printName("Renato"));
  console.log(printName(""));


  function calculaMisAñosPerro(edad){
    if (edad === undefined){
        return "debes ingresar un valor valido"
    }
    if (edad > 0 && edad < 100){
        return edad * 7
    }
    if (edad === 0){
        return "Ingresa una edad valida"
    }

  }

  console.log(calculaMisAñosPerro())
  console.log(calculaMisAñosPerro(24))
  console.log(calculaMisAñosPerro0))



  //vamos a crear una funcion que dentro evalue un parametro que se llame clima
  //esta funcion








  // CONDICIONALES

//1.CONDICION BASICA
// si (la condición es verdadera) {
// // hago algo aca
// }demás{
// // hago otra cosa aca (si la condición es falsa)
//}

//2.CONDICION MULTIPLE
// if (se cumple esta condicion) {
// // mi codigo que se ejecuta si mi condicion es verdadera
//} else if (si se cimple esta otra condicion) {
// // mi codigo si se ejecuta esta otra condicion
//} else if (si se cumple esta otra condicion) {
// // mi codigo si se ejecuta esta otra condicion
// }demás{
// // si ninguna condicion se cumple
//}

// PSEUDOCODIGO
// SI (una condición es cierta) {
// ejecuto un codigo aqui
//} SINO {
// ejcuto aqui un codigo si mi condicion es falsa
//}

// si (condicion) {
// // hago algo aca
// }demás{
// // hago otra cosa
//}

// PSEUDOCODIGO-MULTIPLE-CONDICIONAL

// SI (CONDICION1 ES VERDADERA) {
// HAGO ESTO QUE ESTA DENTRO DE ESTE PAR DE LLAVES
//} SINO SI (CONDICION2 ES VERDADERA) {
// HAGO ESTE OTRO CODIGO QUE ESTA DENTRO DE ESTE PAR DE LLAVES
//} SINO SI (CONDICION3 ES VERDADERA) {
// HAGO ESTE OTRO CODIGO
//} SINO SI (CONDICION3 ES VERDADERA) {
// HAGO ESTE OTRO CODIGO
//} SINO SI (CONDICION3 ES VERDADERA) {
// HAGO ESTE OTRO CODIGO
//} SINO SI (CONDICION3 ES VERDADERA) {
// HAGO ESTE OTRO CODIGO
//} SINO {
// SI NINGUNA DE MIS CONDICIONES FUE VERDADERA ACA EJECUTO UN CODIGO
//}

let  condicion  =  true ;

if  ( condicion  ===  true )  {
  consola . log ( "Hola amigos, bienvenidos a codiGo !!" ) ;
}  más  {
  consola . log ( "Y que estas esperando ñ_ñ" ) ;
}

sea  a  =  0 ;
sea  b  =  0 ;

a  =  4 ;
a  =  6 ;
a  =  9 ;

consola . log ( a ) ;

b  =  5 ;

sea  suma  =  a  +  b ;
// el === compara contenido y tipo
if  ( suma  ===  "9" )  {
  // alerta ("Felicitaciones, adivinaste !!!");
}  más  {
  // alert ("oh, lo siento, sigue intentando !! :)");
}

// == solo compara contenido
let  lenguaje_de_programacion  =  "C ++" ;

if  ( lenguaje_de_programacion  ===  "python" )  {
  consola . log ( "Python es asombroso" ) ;
}  else  if  ( lenguaje_de_programacion  ===  "javascript" )  {
  consola . log ( "Javascript tambien lo es!" ) ;
}  else  if  ( lenguaje_de_programacion  ===  "php" )  {
  consola . log ( "mejor apaga tu computadora amigo / a xd" ) ;
}  else  if  ( lenguaje_de_programacion  ==  "c ++" )  {
  consola . log ( "woow tu eres de los bravos" ) ;
}  más  {
  consola . log ( "que? aun no sabes ninguno? ñ_ñ" ) ;
}

// dependiendo de cual
// sea mi cancion favorita (titulo) voy a mostrar en la consola un
// pequeñisimo fragmento de letra de la cancion

// FUNCIONES

function  miFuncion ( )  {
  consola . log ( "Mi primera función es lo mejor del mundo !!!!." ) ;
  consola . log ( "las funciones me sirven para no repetir mi codigo" ) ;
  consola . log ( "las funciones me ayudan a escribir mejor codigo" ) ;
}

// miFuncion ()

function  imprimeMiNombre ( nombre )  {
  if  ( nombre  ===  "" )  {
    return  "Debes ingresar un nombre" ;
  } else  if  ( nombre  ===  undefined )  {
    return  "Debes ingresar un valor valido" ;
  }

  return  `Mi nombre es $ { nombre } ` ;
}


function  calculaMisAñosPerro ( edad )  {
    if  ( edad  ===  undefined )  {
        return  "Debes ingresar un valor valido" ;
      }
    if  ( edad  >  0  &&  edad  <  100 ) {
        return   `Mi edad en años perro es   $ { edad  *  7 } `
    }
    si ( edad  ===  0 ) {
        return  "Ingresa una edad valida"
    }  
}

    consola . log ( calculaMisAñosPerro ( ) )
    consola . log ( calculaMisAñosPerro ( 24 ) )
    consola . log ( calculaMisAñosPerro ( 0 ) )


 // vamos a crear una funcion que dentro evalue un parametro que se llama clima

 // esta función debera mostrar una frase cuando yo ponga ej. lluvioso, nublado, seco
 // o cualquier otro clima


 // no nos olvidemos de llamar la funcion






// y && -> si mi condicion1 es cierta Y mi condicion2 es hago algo ....

// o || -> si mi condicion1 es cierta O mi condicion2 es cierta hago algo ....

// con un parametro
// imprimeMiNombre ("Josué")

//console.log(imprimeMiNombre("Josue "));

//console.log (imprimeMiNombre (""));




consola.log (imprimeMiNombre ( ) ) ;

consola.log (imprimeMiNombre ( "Josué" ) ) ;

consola.log (imprimeMiNombre ( "" ) ) ;

// // imprimir el resultado de mi funcion con parametros
// console.log (imprimeMiNombre ("Josue"))

// // imprimir el resultado de mi funcion sin pasar parametros
// console.log (imprimeMiNombre (), "funcion sin parametros")

// // imprimir el resultado de mi funcion pasandole un paramtero vacio
// console.log ("")
// // sin parametros
// imprimeMiNombre ()

let  cadena_de_texto  =  "es un tipo string" ;

let  numero  =  "es de tipo number" ;

let  booleano  =  "es de tipo bool (verdadero / falso)" ;

// dejar undefined = undefined;

// indefinido, es un valor "indefinido", lo que significa que no tiene asigando un valor
// pero la variable o constante que lo contiene si existe



function  clima_lima (clima)  {
    if (clima  ===  undefined){
        return "nuevo dato valido"
    }else if(clima == "calor"){
        return "lluvioso"
    }



      return  "Debes ingresar una edad";
    } else  if  (edad  ===  undefined)  {
      return  "Debes ingresar un valor valido";
    }



    let seleccionar = document.querySelector("select")
    let parrafo = document.querySelector ("p")


    function establecerClima(){
        let eleccion = seleccionar.value

        if(eleccion === "soleado"){
            parrafo.textContent =
        }

    }