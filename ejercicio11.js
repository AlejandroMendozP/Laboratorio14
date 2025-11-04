class Producto {
  #nombre;
  #precio;
  #stock;

  constructor(nombre, precio, stock) {
    this.#nombre = nombre;
    this.#precio = precio;
    this.#stock = stock;
  }

  set stock(valor) {
    if (valor > 0) {
      this.#stock = valor;
    } else {
      console.log("Nuevo stock no válido");
    }
  }

  set precio(valor) {
    if (valor > 0) {
      this.#precio = valor;
    } else {
      console.log("Nuevo precio no válido");
    }
  }

  get nombre() {
    return this.#nombre;
  }

  get precio() {
    return this.#precio;
  }

  get stock() {
    return this.#stock;
  }

  vender(cantidad) {
    if (cantidad <= this.#stock) {
      this.stock = this.#stock - cantidad;
    } else {
      console.log("No hay stock suficiente");
    }
  }
}