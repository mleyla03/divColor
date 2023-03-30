let color =document.querySelector("#color")
let btn =document.querySelector("#buton")
let best =document.querySelector(".umumi")
btn.addEventListener("dblclick", daxilEt)
function daxilEt(){
    
    let div= document.createElement("div")
    div.style.width="100px"
    div.style.height="100px"
    best.append(div)
    div.style.backgroundColor=color.value
    color.value=""
   
   
    
}