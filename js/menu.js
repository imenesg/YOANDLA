const menu = document.querySelector(".menu");

menu.addEventListener("click", mostraMenu);

var contador = 0;
function mostraMenu(){
    
    const menuUl = document.querySelector(".lista-menu");

    if(contador == 0){
        menuUl.classList.remove("invisivel");
        menuUl.classList.add("visivel");
        contador = 1;
    }
    else{
        menuUl.classList.remove("visivel");
        menuUl.classList.add("invisivel");
        contador = 0;
    }
    
}