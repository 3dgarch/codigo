//ccsom

const button = document.querySelector("button");
const body = document.querySelector("body");

function ejemploUno() {
    button.onclick =function() {
        console.log("funcion!!!");
        //body.style.background = 'rgba(255, 255, 1';
    
        console.log(window.getComputedStyle(body).backgroundColor);
        console.log("body.style.background" , body.style.background);
        console.log("body.style", body.style);
    
        if(body.style.backgroundColor == "yellow") {
            body.style.backgroundColor = "red";
        } else {
            body.style.backgroundColor = "yellow";
        }
    
    };
    
}

// CLASSLIST
//interface para manejo de clases
//add = agrega una clases 
//remove = remueve clase
//toggle = agrega o quita
//contains = devuelve verdadero si la clase existe en el elemento
//replace = remplaza una clases

function ejemploDos() {
    button.onclick =function() {
       // body.classList.add("bgyellow");
       //body.classList.toggle("bgyellow");
       //body.classList.remove("bgyellow");
       console.log(body.classList.contains("bgyellow"));

       //contains
       if (body.classList.contains("bgyellow")){
           body.classList.add("bgred");
           body.classList.remove("bgyellow");
       }else {
           body.classList.add("bgyellow");
           body.classList.remove("bgred");
       }


    };

}
ejemploDos();

function ejemploTres() {
    const article = document.createElement("article");
    div.innerHTML = `
      <article class="card mb-4">
        <img src="http://" class="card-img-top">
        <div class="car-body">
            <h5 class="card-title">TITULO DEL ARTICULO</h5>
            <p class="card-text">parrafo delarticulo>/p>
            <a href="#" class="btn btn-primary">Go Somewhere</a>
k        </div>
        <button>eliminar</buttton>
      </article>
                 
    `;// al eleemnto le asigno el valor que tendra por dentro
    
   
    

}
ejemploTres();