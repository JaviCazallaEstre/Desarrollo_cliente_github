/*
1- Campo de texto donde ponemos una fecha y la validamos
2- Campo de texto donde ponemos una fecha y la sacamos los años que tienes
3- Campo de texto donde ponemos una fecha y nos dice los dias que llevamos vivos y las horas
4- Metemos 2 fechas y calculamos el tiempo entre fechas. Dias meses y años
5- Fecha nacimiento y decimos cuanto falta hasta la jubilacion (65 años)
 */

//Funcion que nos valida la fecha
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
function validaFecha(fechaString) {
  var fecha = toFecha(fechaString);
  var componentesFecha = fechaString.split("/");
  if (componentesFecha.length == 3) {
    if (
      fecha.getFullYear == componentesFecha[2] &&
      fecha.getMonth == componentesFecha[1] - 1 &&
      fecha.getDate == componentesFecha[0]
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function anyosFecha(fechaString) {
  var fecha = toFecha(fechaString);
  var hoy = new Date();
  var edad = hoy.getFullYear() - fecha.getFullYear();
  var mes = hoy.getMonth() - fecha.getMonth();
  if (mes < 0 || (mes === 0 && hoy.getDate() < edad.getDate())) {
    edad--;
  }
  return edad;
}
function restaFechas(fechaString1, fechaString2) {
  var fecha1 = toFecha(fechaString1);
  var fecha2 = toFecha(fechaString2);
  var diferencia = Math.floor(fecha1.getTime() - fecha2.getTime());
  var dia = 1000 * 60 * 60 * 24;
  var dias = Math.floor(diferencia / dia);
  var meses = Math.floor(dias / 31);
  var anyos = Math.floor(months / 12);
  var mensaje =
    "Hace " + anyos + " años, " + meses + " meses y " + dias + " días";
}
