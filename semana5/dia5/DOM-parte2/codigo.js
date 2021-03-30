
const demoId = document.getElementById("demo");

//console.log(demoId)

demoId.style.border ="5px solid blue"


const demoClass = document.getElementsByClassName("demo")
//console.log(demoClass)

demoClass[0].style.border = "2px dashed yellow";
demoClass[1].style.border = "1px dotted green";



for (let i = 0; i< demoClass.length; i++){
    demoClass[i].style.border = "3px dotted red"
}

const demoTag = document.getElementByTagName ("article")
console.log(demoTag)



//for (i = 0; i<demoTag.length; i++){
//    demoTag[i].style.border = "1px solid blue"
//}


//for (let i = 0; i < demoClass.length; i++){
//    demoClass[i].style.border = "6px solid orange"
//}

//let k  = 0
//while 

const demoQuery =document.querySelector("#demo-query")
demoQuery.style






demoQueryAll.forEach(elemento) => {
    elemento.style.border = "1px solid green";
}




//eventos
const demoTitle = document.getElementById("titulo");
demoTitle.addEventListener("click",()=>{
    alert("Me hiciste Click")
})


