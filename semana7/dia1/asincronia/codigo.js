//lista de quye hacer
//1. Lavar la ropa
//2.Pasear al perro
//3.Sacar la basura
//4.Cocinar algo


function lavarRopa (){
    console.log("lavar ropa")
}
function pasearAlPerro (){
    console.log("pasear al perro")
}
function sacarLaBasura (){
    console.log("sacar la basura")
}
function cocinarAlgo (){
    console.log("cocinar algo")
}


function quehaceres (){
    console.log("lavar ropa");
    console.log("pasear al perro");
    console.log("sacar la basura");
    console.log("cocinar algo");
}

function quehaceres (){
    lavarRopa();
    pasearAlPerro();
    cocinarLaBasura();
    cocinarAlgo();
}

function quehaceres(callback){
    callback(err,lavarRopa);
    pasearAlPerro();


}