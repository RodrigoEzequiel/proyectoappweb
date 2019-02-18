function leerResultado(){

  var direccion = document.location.search;
  var igual = direccion.indexOf("=");                       
  var numero = direccion.substring(igual + 1);
  resultado = parseInt(numero);
  document.querySelector("#puntos").textContent = resultado;


  if (resultado < 70){
    let elemento1 = document.querySelector("#feedback_bien");
    //elemento1.classList.add("d-none");
    elemento1.style.display = "none";
    let elemento2 = document.querySelector("#feedback_mal");
    //elemento2.classList.remove("d-none");
    elemento2.style.display = "block";

  }else{
    let elemento1 = document.querySelector("#feedback_bien");
    //elemento1.classList.add("d-none");
    elemento1.style.display = "block";
    let elemento2 = document.querySelector("#feedback_mal");
    //elemento2.classList.remove("d-none"); 
    elemento2.style.display = "none";
  }    
}
window.addEventListener("load" , leerResultado);



function volver(){
  document.location.href = ("index.html");


}

