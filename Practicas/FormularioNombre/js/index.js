window.addEventListener("load", function () {
  const formulario = document.forms["formulario"];
  const insertar = formulario.insertar;
  const tabla = document.getElementById("tabla");
  const cabDNI = document.querySelectorAll("table thead th")[0];
  cabDNI.ordenacion = 1;
  cabDNI.ondblclick = function () {
    var vector = [];
    var tBody = this.parentNode.parentNode.nextElementSibling;
    var filas = tBody.children;
    for (let i = 0; i < filas.length; i++) {
      vector.push(filas[i]);
    }
    vector.sort(comparaCelda1);
    cabDNI.ordenacion *= -1;
    for (let i = 0; i < vector.length; i++) {
      tBody.appendChild(vector[i]);
    }
  };

  insertar.onclick = function () {
    var dni = formulario.dni.value;
    var nombre = formulario.nombre.value;
    var edad = formulario.edad.value;
    var respuestas = [];
    //valido dni
    if (dni.esDNI()) {
      respuestas.push(true);
      formulario.dni.className = "";
    } else {
      respuestas.push(false);
      formulario.dni.className = "error";
    }

    //valido nombre
    if (nombre != "") {
      respuestas.push(true);
      formulario.nombre.className = "";
    } else {
      respuestas.push(false);
      formulario.nombre.className = "error";
    }

    //valido nombre
    if (parseInt(edad) == edad && edad >= 0) {
      respuestas.push(true);
      formulario.edad.className = "";
    } else {
      respuestas.push(false);
      formulario.edad.className = "error";
    }

    if (
      respuestas.every(function (val, index) {
        return val;
      })
    ) {
      insertarFila(dni, nombre, edad);
    }
  };

  function insertarFila(dni, nombre, edad) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    td1.innerHTML = dni;
    td2.innerHTML = nombre;
    td3.innerHTML = edad;
    tabla.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
  }

  function comparaCelda1(a, b) {
    return (
      cabDNI.ordenacion *
      a.children[0].innerHTML.localeCompare(b.children[0].innerHTML)
    );
  }

  tabla.parentElement.ondblclick = function () {
    var editable = this.getAttribute("editable");
    if (editable != null && editable != "on") {
      this.setAttribute("editable", "on");
      filaCabecera = this.children[0].children[0];
      filasTBody = this.children[1].children;
      var th = document.createElement("th");
      th.innerHTML = "ACCIÓN";
      filaCabecera.appendChild(th);
      for (let i = 0; i < filasTBody.length; i++) {
        var spanE = document.createElement("span");
        var spanB = document.createElement("span");
        spanB.className = "boton borrar";
        spanB.onclick = borrarFila;
        spanE.className = "boton editar";
        spanE.onclick = editarFila;
        var td = document.createElement("td");
        td.appendChild(spanB);
        td.appendChild(spanE);
        filasTBody[i].appendChild(td);
      }
      for (let i = 0; filaCabecera.children.length - 1; i++) {
        filaCabecera.children[i].onclick = ordenarColumna(
          i,
          filaCabecera.children[i]
        );
      }
    }
  };

  function borrarFila() {
    var fila = this.parentElement.parentElement;
    fila.parentElement.removeChild(fila);
  }

  function editarFila() {
    var fila = this.parentElement.parentElement;
    var contenedor = document.createElement("div");
    var td = this.parentElement;
    fila.contenedor = contenedor;
    contenedor.appendChild(td.children[0]);
    contenedor.appendChild(td.children[0]);
    var tds = fila.children;
    debugger;
    for (i = 0; i < tds.length - 2; i++) {
      var contenido = tds[i].innerText;
      tds[i].setAttribute("valor", contenido);
      var input = document.createElement("input");
      if (i == 0) {
        input.readOnly = true;
      }
      input.type = "text";
      input.value = contenido;
      tds[i].removeChild(tds[i].childNodes[0]);
      tds[i].appendChild(input);
    }
    var spanC = document.createElement("span");
    var spanG = document.createElement("span");
    spanC.className = "boton cancelar";
    spanC.onclick = cancelarModificacion;
    spanG.className = "boton guardar";
    spanG.onclick = guardarModificacion;
    td.appendChild(spanC);
    td.appendChild(spanG);
  }

  function cancelarModificacion() {
    var fila = this.parentElement.parentElement;
    var td = this.parentElement;
    var tds = fila.children;
    for (let i = 0; i < tds.length - 1; i++) {
      let valor = tds[i].getAttribute("valor");
      tds[i].innerHTML = valor;
    }
    td.innerHTML = "";
    td.appendChild(fila.contenedor.children[0]);
    td.appendChild(fila.contenedor.children[0]);
  }

  function guardarModificacion() {
    var fila = this.parentElement.parentElement;
    var td = this.parentElement;
    var tds = fila.children;
    var respuestas = [];
  
    respuestas.push(tds[0].children[0].value.esDNI() ? true : false);
    respuestas.push(tds[1].children[0].value != "" ? true : false);
    respuestas.push(
      parseInt(tds[2].children[0].value) == tds[2].children[0].value
        ? true
        : false
    );
    if (
      respuestas.every(function (valor, indice) {
        return valor;
      })
    ) {
      for (let i = 0; i < tds.length - 1; i++) {
        let valor = tds[i].children[0].value;
        tds[i].innerHTML = valor;
      }
      td.innerHTML = "";
      td.appendChild(fila.contenedor.children[0]);
      td.appendChild(fila.contenedor.children[0]);
    }
  }

  function ordenarColumna(i, filaCabecera) {
    var tBody = filaCabecera.parentElement.parentElement.nextElementSibling;
    return function () {
      var filas = tBody.children;
      var vector = [];
      for (let j = 0; j < filas.length; j++) {
        vector.push(filas[j]);
      }
      vector.sort(function (a, b) {
        return a.children[i].innerText.localeCompare(b.children[i].innerText);
      });
      for (let j = 0; j < filas.length; j++) {
        tBody.appendChild(vector[j]);
      }
    };
  }
});
