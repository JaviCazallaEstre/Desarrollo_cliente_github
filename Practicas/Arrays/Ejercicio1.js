const car = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];
//Funcion que compara por numeros
car.sort(function (a, b) {
  return a.year - b.year;
});
//Funcion que compara por letras
car.sort(function (a, b) {
  return a.type.localeCompare(b.type);
});
