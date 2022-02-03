function ejercicioUno(){
    const parrafos = document.querySelectorAll("P");

    function modifyParagraph(parrafo, options){
        console.log("parrafo", parrafo);
        console.log("options", options);
        const a = parrafo.querySelector("a");

        parrafo.style.color = options.color;
        parrafo.style.fontSize = options.fontSize;
        parrafo.style.fontFamily = options.fontFamily;

        a.href = options.href;
        a.textContent = options.textContent;
    }

    modifyParagraph(parrafos[0], {
        color: "blue",
        fontSize: "30px",
        fontFamily: "arial",
        href: "http://google.com",
        text: "google",
    });
    modifyParagraph(parrafos[1],{
        color: "red",
        fontSize: "30px",
        fontFamily: "arial",
        href: "http://google.com",
        text: "google",
    });
    modifyParagraph(parrafos[2],{
        color: "yellow",
        fontSize: "30px",
        fontFamily: "arial",
        href: "http://google.com",
        text: "google",
    });

}