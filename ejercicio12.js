class Producto {
  #nombre;
  #precio;
  #stock;

  constructor(nombre, precio, stock) {
    this.#nombre = nombre;
    this.#precio = precio;
    this.#stock = stock;
  }

  set stock(valorNum) {
    if (valorNum > 0) {
      this.#stock = valorNum;
    } else {
      console.log("Nuevo stock no válido");
    }
  }

  set precio(valor) {
    let valorNum = Number(valor)
    if (valorNum > 0) {
      this.#precio = valorNum;
    } else {
      console.log("Nuevo precio no válido");
    }
  }

  get nombre() {
    return this.#nombre;
  }

  get precio() {
    return "$"+this.#precio.toFixed(2);
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

const producto = new Producto("Manzana", 100, 50);
console.log(producto.precio);
producto.precio = "50";
console.log(producto.precio);
producto.precio = 60;
console.log(producto.precio);
