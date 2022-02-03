// SERVICIOS USANDO FETCH

fetch("https://61ef3da5d593d20017dbb3bb.mockapi.io/users").then((response) => {
    
    return response.json();
})
.then((response) => {
    console.log("aca obtuve la respuesta del servidor", response);
}).catch((error) => {
    console.log("error", error);
});