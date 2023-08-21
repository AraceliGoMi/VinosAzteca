document.getElementById("btn_menu").addEventListener("click", mostrar_menu)

nav = document.getElementsByClassName("navbar");
background_menu = document.getElementById("back_menu");
 
function mostrar_menu(){
    nav.style.right = "0px";
}
function mostrar_menu(){

    nav.style.right = "0px";
    background_menu.style.display = "block";
}

function ocultar_menu(){

    nav.style.right = "-250px";
    background_menu.style.display = "none";
}