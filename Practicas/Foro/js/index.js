window.addEventListener("load", function () {
  const enviar = document.getElementById("boton");
  const form = document.getElementById("formulario");
  const contenedor = document.getElementById("contenedor");
  var usuario = document.getElementById("usuario");
  var mensaje = document.getElementById("mensaje");
  var ultimo=0;
  var tmp1=setInterval(pedirMensaje,5000)
  enviar.onclick = function (ev) {
    ev.preventDefault();
    if (usuario.value != "" && mensaje.value != "") {
      var texto = encodeURI(
        "boton=&usuario=" + usuario.value + "&mensaje=" + mensaje.value
      );
    }
    const ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
      if (ajax.readyState == 4 && ajax.status == 200) {
        var respuesta = ajax.responseText;
        if (respuesta == "OK") {
          form["mensaje"].value = "";
          form["mensaje"].focus();
        }
      }
    };
    ajax.open("POST", "php/responder.php");
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.send(texto);
  };
  function pedirMensaje() {
    const ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
      if (ajax.readyState == 4 && ajax.status == 200) {
        var respuesta = JSON.parse(ajax.responseText);
        if (respuesta.mensajes.length > 0) {
          for (let i = 0; i < respuesta.mensaje.length; i++) {
            var div = crearContenido(respuesta.mensajes[i], usuario);
            contenedor.appendChild(div);
            contenedor.scrollTop = contenedor.scrollHeight;
          }
        }
        (ultimo = respuesta.mensajes), ultimo;
      }
    };
    ajax.open("GET", "php/pedir.php=" + ultimo);
    ajax.send();
  }

  function crearContenido(mensaje, usuario) {
    var claseUsuario = mensaje.usuario == usuario ? "propio" : "otros";
    const div1 = document.createElement("div");
    div1.className = claseUsuario;
    const div2 = document.createElement("div");
    div2.className = claseUsuario;
    div2.innerHTML = mensaje.usuario;
    const div3 = document.createElement("div");
    div3.className = "hora";
    div3.innerHTML = mensaje.fecha;
    const div4 = document.createElement("div");
    div4.className = "mensaje";
    div4.innerHTML = mensaje.mensaje;
    div1.appendChild(div2);
    div1.appendChild(div3);
    div1.appendChild(div4);
  }
});
