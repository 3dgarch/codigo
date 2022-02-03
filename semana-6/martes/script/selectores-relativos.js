const ul = document.querySelector("ul");
console.log("ul", ul);


// FIRST NODE
console.log("ul", ul.firstElementChild);


//lasElementChild
console.log("ul", ul.lastElementChild);

//children
console.log("ul", ul.children);
console.log("ul", ul.children[0]);
console.log("ul", ul.children[1]);

//sibbling previous 
console.log(ul.previousElementSibling.previousElementSibling);

// sibbling next 
console.log(ul.nextElementSibling);

//parent 
console.log(ul.parentElement); //body

console.log(ul.parentElement.querySelector("h1")); //h1


//closet
console.log(document.querySelector("li").closest("html").querySelector(!h1));