// atrapar elementos (document.querySelector("h1")) e imprimidos con %O

const h1 = document.querySelector("h1");
console.log("%O",h1.innerHTML);
h1.style.color = "red";

const h2 = document.querySelector("h2");
console.log("%O",h2);

const h3 = document.querySelector("h3");
console.log("%O", h3);

const h4 = document.querySelector("h4");
console.log("%O", h4);

const h5 = document.querySelector("h5");
console.log("%O", h5);

const h6 = document.querySelector("h6");
console.log("%O", h6);


// Atrapar todos los elementos p  e imprimir (querySelectorAll)
const parrafos = document.querySelectorAll("p");
console.log("%O", parrafos);

for (let i = 0; i<parrafos.length; i++) {
    console.log(parrafos[i]);
}

//elemntos de formulario
const input = document.querySelector("input");
console.log("input", input.value);

const select =document.querySelector("select");
console.log("select", select.value);

//element link
const a = document.querySelector("a");
console.log("a", a);
a.href = "http://google.com";
a.id = "idAgregado";
a.innerHTML = " TEXTO LINK MODIFICADO";
a.style.textDecoration = "none";
a.style.color = "orange";




