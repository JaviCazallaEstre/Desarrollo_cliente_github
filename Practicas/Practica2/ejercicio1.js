/*
Objeto JavaScript para el alumno
propiedades
    nombre
    apellido1
    apellido2
    fechaNacimiento
    dni
    curso
metodos
    nombreCompleto
    edad
    letraDNI
    comprobarDNI
 */

function Alumno(nombre, ap1, ap2, fechaNac, dni, curso) {
    this.nombre = nombre;
    this.ap1 = ap1;
    this.ap2 = ap2;
    this.fechaNac = fechaNac;
    this.dni = dni;
    this.curso = curso;
};
Alumno.prototype.edad = function() {
    var anyoNac = this.fechaNac.substr(-4);
    var anyoActual = (new Date()).getFullYear();
    return anyos = anyoActual - anyoNac;
};
Alumno.prototype.compruebaDNI = function() {
    var numero = this.dni.substr(0, this.dni.length - 1);
    var resto = numero % 23;
    var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    var letra = letras[resto];
    return letra == this.letraDNI();
};
Alumno.prototype.letraDNI = function() {
    return this.dni.substr(-1);
};
Alumno.prototype.nombreCompleto = function() {
    return this.nombre + " " + this.ap1 + " " + this.ap2;
};

function Escribe(Alumno) {
    const parrafo = document.querySelector("parrafo");
    parrafo.innerHTML = "Hola mi nombre es " + this.nombre + " nac&iacute; el d&iacute;a " + this.fechaNac + " mi DNI es " +
        <
        span > < /span>+" y estoy matriculado en " + this.curso;
};