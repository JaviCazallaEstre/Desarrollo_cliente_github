HTMLSelectElement.prototype.agregarTodos = function (select) {
  while (select.length > 0) {
    this.appendChild(select.children[0]);
    this.quitarSeleccion();
  }
  this.ordenar();
};
HTMLSelectElement.prototype.agregar = function (select) {
  while (select.selectedIndex > -1) {
    this.appendChild(select.children[select.selectedIndex]);
    this.quitarSeleccion();
  }
  this.ordenar();
};

HTMLSelectElement.prototype.ordenar = function () {
  vector = [];
  for (let i = 0; i < this.children.length; i++) {
    vector.push(this.children[i]);
  }
  vector.sort(function (a, b) {
    return a.innerHTML.localeCompare(b.innerHTML);
  });
  for (let i = 0; i < this.length; i++) {
    this.appendChild(vector[i]);
  }
  return this;
};

HTMLSelectElement.prototype.quitarSeleccion = function () {
  for (let i = 0; i < this.length; i++) {
    this.children[i].selected = false;
  }
};

HTMLSelectElement.prototype.generaJSON = function () {
  vector = [];
  for (let i = 0; i < this.children.length; i++) {
    vector.push({ "value": i, "text": this.children[i].innerHTML });
  }
  JSON.stringify(vector);
};
