<?php
if (isset($_GET["ultimo"])) {
    $siguiente = $_GET["ultimo"] + 1;
} else {
    $siguiente = 1;
}
$conexion = new PDO('mysql:host=localhost;dbname=foro', 'root', '');
$sentencia = "SELECT * FROM mensajes WHERE id>='$siguiente'";
$registros = $conexion->query($sentencia);
$objeto = new stdClass();
$objeto->mensajes = [];
$ultimo = $siguiente - 1;
while ($resultados = $registros->fetch()) {
    $mensaje = new stdClass();
    $mensaje->id = $resultados["id"];
    $mensaje->usuario = $resultados["usuario"];
    $mensaje->mensaje = $resultados["mensaje"];
    $mensaje->fecha = $resultados["hora"];
    $mensaje->foto = $resultados["foto"];
    $objeto->mensajes[] = $mensaje;
    $ultimo = $resultados["id"];
}
$objeto->ultimo = $ultimo;
echo json_encode($objeto);
