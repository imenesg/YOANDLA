const lampada = document.querySelector(".lampada");
const html = document.querySelector("html");

lampada.addEventListener("click", colorChange);

html.addEventListener('DOMContentLoaded', temaEscolidoantes());




function temaEscolidoantes() {
    
    if(tema = localStorage.getItem('tema') == 'escuro'){
        html.classList.add("escuro");
    }
    else{
        html.classList.remove("escuro");
    }
}


function colorChange(){
   tema = localStorage.getItem('tema'); 
    
    

    if(tema == "claro"){
        html.classList.add("escuro");
        localStorage.setItem("tema", 'escuro');
    }
    else{
        html.classList.remove("escuro");
        localStorage.setItem("tema", 'claro');
    }
    
}
