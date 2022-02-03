/*
EVENTOS
*/

const button = document.querySelector(".js_button");


button.onclick = function() {
    console.log("hola mundo");
    const menu = this.querySelector(".menu"); //atrapando el elementomenu
    console.log("menu.style.display", menu.style.display); //imprimeindo el valor del display
    if (menu.style.display == "block") {
        menu.style.display = "none";

    }else {
        menu.style.display = "block";
    }

};




const button3 = document.querySelector(".js_button_3");

button3.onclick = function() {
     button.style.backgroundColor = "purple";
 };