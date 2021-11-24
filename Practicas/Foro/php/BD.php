<?php
include_once('responder.php');
class BD
{
    private static $conexion;
    public static function creaConexion()
    {
        self::$conexion = new PDO('mysql:host=localhost;dbname=foro', 'root', '');
    }

    public static function meteMensaje($nombre, $mensaje, $foto = null)
    {
        $sentencia = "INSERT INTO mensajes(id, usuario, mensaje, hora, foto) VALUES(NULL, :usuario, :mensaje, NOW(), :foto)";
        $registros = self::$conexion->prepare($sentencia);
        $registros->bindParam(':usuario', $nombre);
        $registros->bindParam(':mensaje', $mensaje);
        $registros->bindParam(':foto', $foto);
        $registros->execute();
    }

    public static function sacaMensajes()
    {
        $sentencia = "SELECT * FROM mensajes";
        $registros = self::$conexion->query($sentencia);
        $objeto = new stdClass();
        $objeto->mensajes = [];
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
        $devuelve = array();
        $devuelve["mensajesObjeto"] = $objeto;
        $devuelve["ultimo"] = $ultimo;
        return $devuelve;
    }
}
