class Carrito{

    constructor(){
        this.productos = [];
    }

    agregarProducto(producto){
        this.productos.push(producto);
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

const producto1 = { 
    nombre: "Laptop", 
    precio: 1500, 
    stock: 5 
};
const producto2 = { 
    nombre: "Mouse", 
    precio: 50, 
    stock: 20 
};

const carrito = new Carrito();

carrito.agregarProducto(producto1);
carrito.agregarProducto(producto2);
console.log(carrito.calcularTotal());
carrito.mostrarResumen();

