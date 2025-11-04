class Producto{
    #nombre;
    #precio;
    #stock;

    constructor(nombre, precio, stock) {
        this.#nombre = nombre;
        this.#precio = precio;
        this.#stock = stock;
    }

    set stock(stock){
        if (stock>0){
            this.#stock =  stock;
        }
        else console.log("Nuevo stock no válido");
    }

    set precio(nuevo){
        if (nuevo>0){
            this.#precio =  nuevo;
        }
        else console.log("Nuevo precio no válido");
    }

    vender(cantidad){
        if (cantidad<=this.#stock){
            this.stock = this.#stock - cantidad;
        }
        else console.log("No hay stock suficiente");
    }
}