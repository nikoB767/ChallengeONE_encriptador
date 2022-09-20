var botonEncriptar = document.querySelector(".boton_encriptar"); 
var botonDesencriptar = document.querySelector(".boton_desencriptar");
var personaje = document.querySelector(".imagen_egreso");
var tituloEgreso = document.querySelector(".titulo_egreso")
var parrafo = document.querySelector(".parrafo")
var resultado = document.querySelector(".resultadoDesencriptado")

//imprime el resultado ya encriptado//
function imprimirResultado() {
    ocultarElementos();
    resultado.textContent = encriptarTexto(textoingresado());
       
}

function textoingresado() {
    var textoIngreso = document.querySelector (".area_ingreso");
    return textoIngreso.value;
}

//funcion para ocultar imagen en elemento egreso//
function ocultarElementos() {
    personaje.classList.add("ocultar")
    tituloEgreso.classList.add("ocultar")
    parrafo.classList.add("ocultar")
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var final = ""; //mostrara el resultado final//
    
    for (var i = 0 ; i < texto.length; i++){
        if (texto[i] == "a"){
            final = final + "ai"
        }
        else if (texto[i] == "e"){
            final = final + "enter"
        }  
        else if (texto[i] == "i"){
            final = final + "imes"
        }  
        else if (texto[i] == "o"){ 
            final = final + "ober"
        }  
        else if (texto[i] == "u"){
            final = final + "ufat"
        }
        else {
            final = final + texto[i];
        } 
        
                
    
    }   
    
    return final;

 } 


botonEncriptar.onclick = imprimirResultado;
