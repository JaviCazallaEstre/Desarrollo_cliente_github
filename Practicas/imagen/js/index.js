window.addEventListener("load", function () {
  const formu = document.getElementById("formu");
  const fichero = document.getElementById("imagen");
  const enviar = document.getElementById("enviar");
  const foto = document.getElementById("foto");
  enviar.onclick = function (ev) {
    ev.preventDefault();
    if (/^image\//.test(fichero.files[0].type)) {
      var reader = new FileReader();
      reader.onload = function (e) {
        foto.setAttribute("src", e.target.result);
      };
      reader.readAsDataURL(fichero.files[0]);
    } else {
      alert("selecciona una imagen");
    }
  };
});
