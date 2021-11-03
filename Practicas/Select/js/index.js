window.addEventListener("load", function () {
  const botonIzquierda = document.getElementById("botonIzquierda");
  const botonDerecha = document.getElementById("botonDerecha");
  const botonTodosIzquierda = document.getElementById("botonTodosIzquierda");
  const botonTodosDerecha = document.getElementById("botonTodosDerecha");
  var alumnos = document.getElementById("Alumnos");
  var seleccionados = document.getElementById("Seleccionados");
  botonTodosDerecha.onclick = function () {
    seleccionados.agregarTodos(alumnos);
  };
  botonTodosIzquierda.onclick = function () {
    alumnos.agregarTodos(seleccionados);
  };

  botonDerecha.onclick = function () {
    seleccionados.agregar(alumnos)
  };
  botonIzquierda.onclick = function () {
    alumnos.agregar(seleccionados);
  };
});
