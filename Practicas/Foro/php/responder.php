<?php
include_once("BD.php");
bd::creaConexion();
if (isset($_POST["boton"])) {
    bd::meteMensaje($_POST["usuario"], $_POST["mensaje"]);
    echo "OK";
}
