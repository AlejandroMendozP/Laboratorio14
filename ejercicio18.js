class Carrito{

    constructor(){
        this.productos = [];
    }

    agregarProducto(Producto){
        this.productos.push(Producto);
    }

    calcularTotal(){
        let suma = 0;
        for (const p of this.productos){
            suma += p.precio;
        }
        return suma;
    }

    mostrarResumen(){
        for (const p of this.productos){
            console.log(p);
        }
    }
}

class Producto{
    
    constructor(nombre, precio, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

const carrito = new Carrito();
const p1 = new Producto("Laptop", 1500, 10);
const p2 = new Producto("Mouse", 50, 20);

carrito.agregarProducto(p1);
carrito.agregarProducto(p2);
console.log(carrito.calcularTotal());
carrito.mostrarResumen();

