window.addEventListener("load", function () {
  var botonEnviar = document.getElementById("enviar");
  botonEnviar.addEventListener("click", function () {
    var textoDni = document.getElementById("dni");
    var textoNombre = document.getElementById("nombre");
    var textoEdad = document.getElementById("edad");
    var tbody = document.getElementById("cuerpo");
    var errores = 0;
    var expresionNombre = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
    if (expresionNombre.test(textoNombre.value) == false) {
      errores = errores + 1;
      textoNombre.className = "error";
    } else {
      textoNombre.className = "";
    }
    var expresion_regular_dni = /^[XYZ]?\d{5,8}[A-Z]$/;
    if (expresion_regular_dni.test(textoDni.value) == false) {
      errores = errores + 1;
      textoDni.className = "error";
    } else {
      textoDni.className = "";
    }
    if (
      textoEdad.value == parseInt(textoEdad.value) &&
      parseInt(textoEdad.value) >= 0
    ) {
      textoEdad.className = "";
    } else {
      errores = errores + 1;
      textoEdad.className = "error";
    }
    if (errores == 0) {
      var botonBorrar = document.createElement("button");
      botonBorrar.textContent = "Borrar";
      var tr = document.createElement("TR");
      var td1 = document.createElement("TD");
      var td2 = document.createElement("TD");
      var td3 = document.createElement("TD");
      var td4 = document.createElement("TD");
      td1.innerHTML = textoDni.value;
      td2.innerHTML = textoNombre.value;
      td3.innerHTML = textoEdad.value;
      td4.appendChild(botonBorrar);
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tbody.appendChild(tr);
      botonBorrar.addEventListener("click", function () {
        botonBorrar.parentElement.parentElement.remove();
      });
    }
  });
});
