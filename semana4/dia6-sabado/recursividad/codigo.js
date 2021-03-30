console.log("Hola Mundo")

//Recursividd


/* let mi_nombre = prompt("Adivina mi nombre!!!!")

while (mi_nombre.toLowerCase() !== "carlos") {

    if (mi_nombre.toLowerCase() === "carlos") {
        alert("Hey!!, adivinaste mi nombre.")
        break;

    } else {
        let match = prompt("Sigue intentando")

        if (match === "carlos") {
            break;
        }
    }
}
 */



//WHILE

/* let mi_nombre =prompt("!Adivina mi nombre!!!"); //lo que escriba el usuario
while(mi_nombre !== "carlos"){
    mi_nombre = prompt("Sigue intentando!!!"); //almaceno otro valor
    break;
}
alert("Hey! Adivinaste mi nombre!!!"); */


//DO WHILE



/* let mi_nombre =prompt("!Adivina mi nombre!!!");
do {
    mi_nombre = prompt("Sigue intentando!!!");
    if (mi_nombre ==="carlos"){
        alert("Hey! adivinaste mi nombre!!!");
    }
}   while(mi_nombre !== "carlos"); */


//CON RECURSIVIDAD

function adivina_mi_nombre(mi_nombre) {
    mi_nombre = prompt("Adivina mi nombre");
    if (mi_nombre ==="josue"){
        alert("Hey! adivinaste mi nombre!!!");
        return;
    }
    adivina_mi_nombre(mi_nombre);    
}

adivina_mi_nombre();

mi_nombre = prompt("Sigue intentando");







