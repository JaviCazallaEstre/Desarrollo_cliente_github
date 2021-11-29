window.addEventListener("load", function () {
  const enviar = document.getElementById("boton");
  const form = document.getElementById("formulario");
  const contenedor = document.getElementById("contenedor");
  var usuario = document.getElementById("usuario");
  var mensaje = document.getElementById("mensaje");
  var ultimo = 0;
  var foto = document.getElementById("foto");
  var tmp1 = setInterval(pedirMensajes, 5000);
  enviar.onclick = function (ev) {
    ev.preventDefault();
    if (/^image\//.test(foto.files[0].type)) {
      var reader = new FileReader();
      imagen = reader.readAsDataURL(foto.files[0]);
    }
    if (usuario.value != "" && mensaje.value != "") {
      let formu = new FormData();
      formu.append("boton", "");
      formu.append("usuario", usuario.value);
      formu.append("mensaje", mensaje.value);
      if (/^image\//.test(foto.files[0].type)) {
        formu.append("foto", foto.files[0]);
      }

      const ajax = new XMLHttpRequest();
      ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
          var respuesta = ajax.responseText;
          if (respuesta == "OK") {
            form["mensaje"].value = "";
            form["mensaje"].focus();
            form["foto"].value = "";
          }
        }
      };
      ajax.open("POST", "php/responder.php");
      ajax.send(formu);
    }
  };
  function pedirMensajes() {
    const ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
      if (ajax.readyState == 4 && ajax.status == 200) {
        var respuesta = JSON.parse(ajax.responseText);
        if (respuesta.mensajes.length > 0) {
          for (let i = 0; i < respuesta.mensajes.length; i++) {
            var div = crearContenido(respuesta.mensajes[i], usuario.value);
            if (
              contenedor.scrollHeight - contenedor.scrollTop <
              contenedor.clientHeight + 10
            ) {
              contenedor.appendChild(div);
              contenedor.scrollTop = contenedor.scrollHeight;
            } else {
              contenedor.appendChild(div);
            }
          }
        }
        ultimo = respuesta.ultimo;
      }
    };
    ajax.open("GET", "php/pedir.php?ultimo=" + ultimo);
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
    if (mensaje.foto !=null) {
      const div5 = document.createElement("div"); 
      imagen=new Image();
      imagen.src='data:image/png;base64,'+mensaje.foto;
      div5.className = "foto";
      div5.appendChild(imagen);
      div1.appendChild(div5);
    }
    return div1;
  }
});
