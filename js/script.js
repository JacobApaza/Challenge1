const botonEncriptar = document.querySelector(".btn-encriptar");
const botonDesencriptar = document.querySelector(".btn-desencriptar");
const muneco = document.querySelector(".contenedorMuneco");
const contenedor = document.querySelector(".contenedor-parrafo");
const resultado = document.querySelector(".texto-resultado");
const btnCopiar = document.querySelector(".btn-copiar"); 

botonEncriptar.addEventListener("click", encriptar);
botonDesencriptar.addEventListener("click", desencriptar);
btnCopiar.addEventListener("click", copiar);

function encriptar(){
    ocultarAdelante();
    const cajatexto = recuperarTexto();
    resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar(){
    ocultarAdelante();
    const cajatexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto(){
    const cajatexto = document.querySelector(".cajaTexto");
    return cajatexto.value;
}

function ocultarAdelante(){
    muneco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
    return mensaje
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function desencriptarTexto(mensaje){
    return mensaje
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

function copiar(){
    const contenido = resultado.textContent;
    if (contenido) {
        navigator.clipboard.writeText(contenido)
            .then(() => {
                alert("Texto copiado al portapapeles");
            })
            .catch(err => {
                console.error('Error al copiar el texto: ', err);
            });
    } else {
        alert("No hay texto para copiar");
    }
}
