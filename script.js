var textInput = document.querySelector(".input");
var encriptarButton = document.querySelector(".encrypt");
var desencriptarButton = document.querySelector(".decrypt");
var textoMostrado = document.querySelector(".output");
var copiarButton = document.querySelector(".copy");

// Parámetros para encriptar
var letraEncriptada = {
  "a": "ai",
  "e": "enter",
  "i": "imes",
  "o": "ober",
  "u": "ufat"
};

// Parámetros para desencriptar
var letraDesencriptada = {
  "ai": "a",
  "enter": "e",
  "imes": "i",
  "ober": "o",
  "ufat": "u"
};

function reemplazoDeVocales(palabra) {
    var nuevaPalabra = "";
    for (var i = 0; i < palabra.length; i++) {
      var letra = palabra[i];
      if (letra in letraEncriptada) {
        nuevaPalabra += letraEncriptada[letra];
      } else {
        nuevaPalabra += letra;
      }
    }
    textoMostrado.value = ""; // Limpiar el área de texto
    return nuevaPalabra;
}

// Función para desencriptar
function desencriptador(palabra) {
  for (var formato in letraDesencriptada) {
    palabra = palabra.replaceAll(formato, letraDesencriptada[formato]);
  }
  textoMostrado.value = ""; // Limpiar el área de texto
  return palabra;
}

function mostrarBtn() {
  copiarButton.style.display = "block";
}

// Evento para mostrar el texto ingresado en el text area
encriptarButton.addEventListener("click", function() {
  textoMostrado.value = "";
  textoMostrado.value = reemplazoDeVocales(textInput.value);
  textInput.value = ""; // Limpiar el área de texto
  mostrarBtn();
});

desencriptarButton.addEventListener("click", function() {
  textoMostrado.value = "";
  textoMostrado.value = desencriptador(textInput.value);
  textInput.value = ""; // Limpiar el área de texto
  mostrarBtn();
});

copiarButton.addEventListener("click", function() {
  navigator.clipboard.writeText(textoMostrado.value);
});