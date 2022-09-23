var botonEncriptar = document.querySelector(".boton_encriptar"); 
var botonDesencriptar = document.querySelector(".boton_desencriptar");
var personaje = document.querySelector(".imagen_egreso");
var tituloEgreso = document.querySelector(".titulo_egreso")
var parrafo = document.querySelector(".parrafo")
var resultado = document.querySelector(".resultadoDesencriptado")
var botonCopiar = document.querySelector(".btn_copiar");

//imprime el resultado ya encriptado//
function encriptar() {
    ocultarElementos();
    
    resultado.textContent = encriptarTexto(textoingresado());
       
}

function desencriptar() {
    ocultarElementos();
   
    resultado.textContent = desencriptarTexto(textoingresado());
       
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

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var final = ""; //mostrara el resultado final//
    
    for (var i = 0 ; i < texto.length; i++){
        if (texto[i] == "a"){
            final = final + "a"
            i = i + 1;
        }
        else if (texto[i] == "e"){
            final = final + "e"
            i = i + 4;
        }  
        else if (texto[i] == "i"){
            final = final + "i"
            i = i + 3;
        }  
        else if (texto[i] == "o"){ 
            final = final + "o"
            i = i + 3;
        }  
        else if (texto[i] == "u"){
            final = final + "u"
            i = i + 3;
        }
        else {
            final = final + texto[i];            
        }     
                
    
    }   
    
    return final;

}

function copiar() {

    var content = document.getElementById('areaResultado');
    
    content.select();
    document.execCommand('copy');

    alert("Copiado!");



}




botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;
