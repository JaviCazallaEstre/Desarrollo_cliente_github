<?php
include_once("BD.php");
bd::creaConexion();
if (isset($_POST["boton"])) {
    $imgContenido=null;
    if(isset($_FILES["foto"])){
        $image = $_FILES['foto']['tmp_name'];
        $imgContenido = file_get_contents($image);
        $imgContenido=base64_encode($imgContenido);
    }
    bd::meteMensaje($_POST["usuario"], $_POST["mensaje"], $imgContenido);
    echo "OK";
}
