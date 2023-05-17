var carrusel = document.querySelector('#carrusel')
var imagenes = carrusel.querySelectorAll('#imagen','#imagen1','#imagen2','imagen3','imagen4')

var indiceImagenActual = 0

function mostrarImagenActual(indice) {
  if (indice !== indiceImagenActual) {
    imagenes[indiceImagenActual].classList.remove('visible')
    imagenes[indiceImagenActual].classList.add('invisible')
  }

  imagenes[indice].classList.remove('invisible')
  imagenes[indice].classList.add('visible')
  indiceImagenActual = indice
}

function mostrarAnterior() {
  indice =
    indiceImagenActual === 0 ? imagenes.length - 1 : indiceImagenActual - 1
  mostrarImagenActual(indice)
}

function mostrarSiguiente() {
  indice =
    indiceImagenActual === imagenes.length - 1 ? 0 : indiceImagenActual + 1
  mostrarImagenActual(indice)
}

mostrarImagenActual(indiceImagenActual)


/* Reloj */

function startTime() {
  var today = new Date();
  var hr = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();

  min = checkTime(min);
  sec = checkTime(sec);
  document.getElementById("hora").innerHTML = hr + " : " + min + " : " + sec;
  var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
  if (i < 10) {
      i = "0" + i;
  }
  return i;
}


function ConfirmDemo() {
  //Ingresamos un mensaje a mostrar
  var mensaje = confirm("Si te gusta mi pagina web aceptar");
  //Detectamos si el usuario acepto el mensaje
  if (mensaje) {
  alert("¡Gracias por aceptar!");
  }
  //Detectamos si el usuario denegó el mensaje
  else {
  alert("¡Haz denegado el mensaje!");
  }
  }
  function cambiarColor() {
    color.innerHTML=color.innerHTML=="no apruebo"?"apruebo":"no apruebo";
  }


