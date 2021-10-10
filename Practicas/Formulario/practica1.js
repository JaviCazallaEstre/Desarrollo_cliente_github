/* Formulario de aseguradora de coches pedimos tambien ponemos empresa
-DNI
-Nombre
-Apellidos
-Direccion
-CP
-Provincia readOnly
-Municipio readOnly
-Fecha nacimiento
-Fecha carnet
-telefono
-Matricula
-Marca
-Fecha matriculacion
-Modelo
-Cilindrada
-Puertas(entre 2 y 5)
-Extras(opcional)
validar y entregar en json
*/
function toFecha(fechaString) {
  var fecha = 0;
  var componentesFecha = fechaString.split("/");
  if (componentesFecha.length == 3) {
    fecha = new Date(
      componentesFecha[2],
      componentesFecha[1] - 1,
      componentesFecha[0]
    );
  }
  return fecha;
}
function anyosFecha(fechaString1, fechaString2) {
  var fecha = toFecha(fechaString1);
  var hoy = toFecha(fechaString2);
  var edad = hoy.getFullYear() - fecha.getFullYear();
  var mes = hoy.getMonth() - fecha.getMonth();
  if (mes < 0 || (mes === 0 && hoy.getDate() < edad.getDate())) {
    edad--;
  }
  return edad;
}
window.addEventListener("load", function () {
  var dniInput = document.getElementById("DNI");
  var nombreInput = document.getElementById("nombre");
  var apellidosInput = document.getElementById("apellidos");
  var razonInput = document.getElementById("razon");
  var cifInput = document.getElementById("CIF");
  var codigoInput = document.getElementById("codigoPostal");
  var direccionInput = document.getElementById("direccion");
  var municipioInput = document.getElementById("municipio");
  var provinciaInput = document.getElementById("provincia");
  var fechaNacInput = document.getElementById("fechaNac");
  var fechaCarnetInput = document.getElementById("fechaCarnet");
  var telefonoInput = document.getElementById("telefono");
  var matriculaInput = document.getElementById("matricula");
  var marcaInput = document.getElementById("marca");
  var modeloInput = document.getElementById("modelo");
  var cilindradaInput = document.getElementById("cilindrada");
  var puertasInput = document.getElementById("puertas");
  var extrasTextArea = document.getElementById("extras");
  var botonInput = document.getElementById("enviar");
  dniInput.disabled = true;
  nombreInput.disabled = true;
  apellidosInput.disabled = true;
  razonInput.disabled = true;
  cifInput.disabled = true;
  codigoInput.disabled = true;
  direccionInput.disabled = true;
  municipioInput.disabled = true;
  provinciaInput.disabled = true;
  fechaNacInput.disabled = true;
  fechaCarnetInput.disabled = true;
  telefonoInput.disabled = true;
  matriculaInput.disabled = true;
  marcaInput.disabled = true;
  modeloInput.disabled = true;
  cilindradaInput.disabled = true;
  puertasInput.disabled = true;
  extrasTextArea.disabled = true;
  botonInput.disabled = true;
  document
    .getElementById("eleccion.empresa")
    .addEventListener("click", function () {
      dniInput.disabled = true;
      nombreInput.disabled = true;
      apellidosInput.disabled = true;
      razonInput.disabled = false;
      cifInput.disabled = false;
      codigoInput.disabled = false;
      direccionInput.disabled = false;
      municipioInput.disabled = false;
      provinciaInput.disabled = false;
      fechaNacInput.disabled = false;
      fechaCarnetInput.disabled = false;
      telefonoInput.disabled = false;
      matriculaInput.disabled = false;
      marcaInput.disabled = false;
      modeloInput.disabled = false;
      cilindradaInput.disabled = false;
      puertasInput.disabled = false;
      extrasTextArea.disabled = false;
      botonInput.disabled = false;
    });
  document
    .getElementById("eleccion.persona")
    .addEventListener("click", function () {
      dniInput.disabled = false;
      nombreInput.disabled = false;
      apellidosInput.disabled = false;
      razonInput.disabled = true;
      cifInput.disabled = true;
      codigoInput.disabled = false;
      direccionInput.disabled = false;
      municipioInput.disabled = false;
      provinciaInput.disabled = false;
      fechaNacInput.disabled = false;
      fechaCarnetInput.disabled = false;
      telefonoInput.disabled = false;
      matriculaInput.disabled = false;
      marcaInput.disabled = false;
      modeloInput.disabled = false;
      cilindradaInput.disabled = false;
      puertasInput.disabled = false;
      extrasTextArea.disabled = false;
      botonInput.disabled = false;
    });
  botonInput.addEventListener("click", function () {
    var errores = new Array();
    if (document.getElementById("eleccion.empresa").checked) {
      var expresionCif = /^[a-zA-Z]{1}\d{7}[a-zA-Z0-9]{1}$/;
      if (expresionCif.test(cifInput.value) == false) {
        errores["CIF"] = "Formato de CIF incorrecto";
        alert(errores["CIF"]);
      }
      if (razonInput.value == "") {
        errores["razon"] = "El campo Razón social debe de estar relleno";
        alert(errores["razon"]);
      }
    } else if (document.getElementById("eleccion.persona").checked) {
      var expresion_regular_dni = /^[XYZ]?\d{5,8}[A-Z]$/;
      if (expresion_regular_dni.test(dniInput.value) == false) {
        errores["DNI"] = "Formato de DNI incorrecto";
        alert(errores["DNI"]);
      }
      var expresionNombreApellido = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
      if (expresionNombreApellido.test(nombreInput.value) == false) {
        errores["nombre"] = "Formato de nombre incorrecto";
        alert(errores["nombre"]);
      }
      if (expresionNombreApellido.test(apellidos.value) == false) {
        errores["apellidos"] = "Formato de apellidos incorrecto";
        alert(errores["apellidos"]);
      }
    }
    if (direccionInput.value == "") {
      errores["direccion"] = "El campo de direccion debe de estar relleno";
      alert(errores["direccion"]);
    }
    var expresionFecha =
      /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/;
    if (expresionFecha.test(fechaNacInput.value) == false) {
      errores["fechaNac"] = "El formato de fecha de nacimiento no es correcto";
      alert(errores["fechaNac"]);
    } else {
      if (expresionFecha.test(fechaCarnetInput.value) == false) {
        errores["fechaCarnet"] = "El formato de fecha de carnet no es válida";
        alert(errores["fechaCarnet"]);
      } else {
        var anyos = anyosFecha(fechaNacInput.value, fechaCarnetInput.value);
        if (anyos < 18) {
          errores["edad"] = "Debes de tener 18 años";
          alert(errores["edad"]);
        }
      }
    }
    var patronTelefono = /[0123456789]{9}/;
    if (patronTelefono.test(telefonoInput.value) == false) {
      errores["telefono"] = "El telefono no puede tener ese formato";
      alert(errores["telefono"]);
    }
    patronMatricula = /^([A-Z]{1,2})?\d{4}([A-Z]{2,3})$/;
    if (patronMatricula.test(matriculaInput.value) == false) {
      errores["matricula"] = "El formato de la matricula no es correcto";
      alert(errores["matricula"]);
    }
    if (marcaInput.value == "") {
      errores["marca"] = "La marca debe de estar rellena";
      alert(errores["marca"]);
    }
    if (modeloInput.value == "") {
      errores["modelo"] = "El modelo debe de estar relleno";
      alert(errores["modelo"]);
    }
    if (cilindradaInput.value < 1 || cilindradaInput.value > 2000) {
      errores["cilindrada"] = "El formato de la cilindrada no es correcto";
      alert(errores["cilindrada"]);
    }
    if (puertasInput.value < 2 || puertasInput.value > 5) {
      errores["puertas"] = "El numero de puertas no es válido";
      alert(errores["puertas"]);
    }
    if (extrasTextArea.value != "") {
      let extras;
      extras = extrasTextArea.value.split("/n");
    }
    if (errores.length == 0) {
      if (document.getElementById("eleccion.persona")) {
        alquiler = {
          "dni": dniInput.value,
          "nombre": nombreInput.value,
          "apellidos": apellidosInput.value,
          "codigo": codigoInput.value,
          "direccion":direccionInput.value,
          "municipio":municipioInput.value,
          "provincia":provinciaInput.value,
          "fechaNac":fechaNacInput.value,
          "fechaCarnet":fechaCarnet.value,
          "telefono":telefonoInput.value,
          "matricula":matriculaInput.value,
          "marca":marcaInput.value,
          "modelo":modeloInput.value,
          "cilindrada":cilindradaInput.value,
          "puertas":puertasInput.value,
          "extras":extras
        };
      }else{
        alquiler={
          "CIF":cifInput.value,
          "razon":razonInput.value,
          "codigo": codigoInput.value,
          "direccion":direccionInput.value,
          "municipio":municipioInput.value,
          "provincia":provinciaInput.value,
          "fechaNac":fechaNacInput.value,
          "fechaCarnet":fechaCarnet.value,
          "telefono":telefonoInput.value,
          "matricula":matriculaInput.value,
          "marca":marcaInput.value,
          "modelo":modeloInput.value,
          "cilindrada":cilindradaInput.value,
          "puertas":puertasInput.value,
          "extras":extras
        };
      }
      alquilerJson=JSON.stringify(alquiler);
    }
  });
});
