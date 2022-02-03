function countRepeatLetter(stringCharacter, letterFind){
    let totalLetra = 0;
    for(let index = 0; index < stringCharacter.length; index++){
        if (stringCharacter[index] === letterFind){
            totalLetra++;
        }
    }
    return totalLetra;
}
console.log(countRepeatLetter("anastacia","t"));
console.log(countRepeatLetter("juansaul","a"));


/*
POR VALOR  Y POR REFERENCIA
*/

let referencia = "edgar";
let referencia2 = referencia;

referencia = "edagar modificado";

console.log("referencia", referencia);
console.log("referencia2", referencia2);



let objReferencia = {
    name: "sebastian",
    lastname: "yubiku",
};

let objReferencia2 = Object.assign(
    {},
    objReferencia,
    {age: 32},
    {country: "peru"},
    {age: 34},
); // copia con object assing
let objReferencia3 = {...objReferencia, age: 32 }; //otra forma de hacer copias
objReferencia.name = "SEBASTIAN MODIFICADO";
objReferencia.lastname = "sebastian MODIFICADO";

console.log("objReferencia", objReferencia);
console.log("objRefencia2", objReferencia2);








// DATE

const date = new Date();
console.log(date.getDate());
