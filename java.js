
// ----- LIKES -----
function darLike(foto){
   console.log("prueba");

    let contadorLikes=localStorage.getItem(foto+"_likes");

    if(contadorLikes==null){
        contadorLikes=0;
    }
    contadorLikes++;

    localStorage.setItem(foto+"_likes", contadorLikes);
    document.getElementById("contador-"+foto).innerText=contadorLikes+"ME GUSTA";
}

function guardarComentario(foto){

    let input = document.getElementById("comentario-" + foto);
    let texto = input.value;
    if(texto.trim() === ""){
        return;
    }
    
    let comentarios = JSON.parse(localStorage.getItem(foto + "_comentarios")) || [];
    
    comentarios.push(texto);
    
    localStorage.setItem(foto + "_comentarios", JSON.stringify(comentarios));
    
    mostrarComentarios(foto);
    
    input.value = "";
    
    }
    function mostrarComentarios(foto){
    
    let lista = document.getElementById("lista-" + foto);
    
    lista.innerHTML = "";
    
    let comentarios = JSON.parse(localStorage.getItem(foto + "_comentarios")) || [];
    
    comentarios.forEach(function(c){
    
    let li = document.createElement("li");
    
    li.textContent = c;
    
    lista.appendChild(li);
    
    });
    
    }