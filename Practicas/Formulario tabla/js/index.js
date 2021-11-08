window.addEventListener("load", function () {
  var nombre = document.getElementById("nombre");
  var dni = document.getElementById("dni");
  var fecha = document.getElementById("fecha");

  dni.onkeypress = function (e) {
      if(!isNaN(e.key)){
          e.preventDefault;
      }
    return e.key;
  };
  dni.onkeyup=function () {
    var letras="TRWAGMYFPDXBNJZSQVHLCKE"
    if(dni.value.length==8){
        dni.value+=parseInt(dni.value)%23;
    }
  };
});
