
// ----- LIKES -----
function darLike(foto){
   console.log("prueba");
    let contadorLike=localStorage.getItem(foto+"-likes");
    if(contadorLikes==null){
        contadorLikes=0;
    }
    contadorLikes++;
    localStorage.setItem(foto+"_likes", contadorLikes);
    document.getElementById("contador-"+foto).innerText=contadorLike+"ME GUSTA";
}

