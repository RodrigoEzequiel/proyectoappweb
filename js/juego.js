let segundos = 0;
let vuelta = 0;
let resultado = 0;

const cant_vueltas = 10;
let tiempo = 10 ;
let reloj;

/* ################################################################## 
        Calcula el ancho de la barra de resultado
##################################################################### */

function calcularAnchoBarra (puntos){

const ancho_maximo = 107;
return puntos * ancho_maximo / 100;
}



function leerNivel(){
  let direccion = document.location.search;
  let igual =  direccion.indexOf("=");     
  let numero = direccion.substring(igual + 1);
  segundos = parseInt(numero);

}

/* clase 9 */

function randomN (n){
  return Math.floor(Math.random() * n); 
} 

function desordenarArray (array){ 
  let longitud = array.length  ;
  for (let i = 0 ; i < longitud ; i++){
  
    let rand = randomN (longitud) ;
    let temp = array[i];
    array[i] = array[rand];
    array[rand] = temp ;
  }   

}

function cargarImagenes () {
  let posicionNoReciclado = 0;
  let posicionReciclado = 1;
    if(Math.random() > 0.5){
      posicionNoReciclado = 1;
      posicionReciclado = 0 ;
    }


document.querySelector("#img" + posicionNoReciclado).src = "img/norecic/" + noReciclables[vuelta].img;
  
document.querySelector("#nombreImg" + posicionNoReciclado).textContent = noReciclables [vuelta].nombre;

  
  
document.querySelector("#img" + posicionReciclado).src = "img/recic/" + reciclables[vuelta].img;
  
document.querySelector("#nombreImg" + posicionReciclado).textContent = reciclables [vuelta].nombre;

}

function inicializarVuelta() { 
  cargarImagenes ();
  tiempo = segundos;
  document.querySelector("#timeCount").textContent = tiempo;
//activa el timer para cuenta regresiva
  reloj = setInterval (actualizarTiempo, 1000);
 }

function actualizarTiempo (){
  tiempo--;
  document.querySelector("#timeCount").textContent = tiempo;
    if(tiempo == 0){
      cambiarPregunta();    
    }
}

function cambiarPregunta(){
  clearInterval(reloj);
  vuelta++;
    if(vuelta < cant_vueltas){
     inicializarVuelta();
    }else{
      document.location.href = "resultado.html?res=" + resultado ;     
        }
    }

function verificarRespuesta () {
  let boton = this ;
  let imagen = boton.querySelector("img");
  let indice = imagen.src.indexOf("img/recic/");
  
  //chequea si la imagen proviene de la carpeta reciclable
  
    if (indice != -1 ){
      resultado += 10;
      document.querySelector("#progressBar").style.width =calcularAnchoBarra(resultado) + "px";         
    }
  cambiarPregunta();
}

function inicializarJuego(){
  leerNivel();
  
  document.querySelector("#boton0").addEventListener("click",verificarRespuesta);
  document.querySelector("#boton1").addEventListener("click",verificarRespuesta);
  
  desordenarArray (reciclables);
  desordenarArray (noReciclables);
  
  inicializarVuelta();
}

window.addEventListener("load",inicializarJuego);  
   