const button = document.querySelector(".js_btn_one");
console.log(button);


button.onclick = function() {
    console.log("hola mundo");
};

////////////////////////////////
const btnTwo = document.querySelector(".js_btn_two");
function eventOne(event) {
    console.log("hola desde addEventListener eventOne");
    
}