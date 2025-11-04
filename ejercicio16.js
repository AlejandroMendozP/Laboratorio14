class Empleado {
    constructor(nombre, sueldoBase) {
        this.nombre = nombre;
        this.sueldoBase = sueldoBase;
    }
    calcularSueldo() {
        return this.sueldoBase;
    }
}

class Programador extends Empleado {
    constructor(nombre, sueldoBase, lenguaje) {
        super(nombre, sueldoBase);
        this.lenguaje = lenguaje;
    }

    calcularSueldo() {
        return super.calcularSueldo() * 1.10;
    }
}

class ProgramadorSenior extends Programador {
    constructor(nombre, sueldoBase, lenguaje) {
        super(nombre, sueldoBase, lenguaje);
    }

    calcularSueldo() {
        return super.calcularSueldo() / 1.10 * 1.25; 
  }
}

const empleado = new Empleado("Carlos", 2000);
const programador = new Programador("Ana", 2500, "JavaScript");
const senior = new ProgramadorSenior("Luis", 3000, "Python");

console.log("Nombre: " + empleado.nombre + "\nSueldo: " + empleado.calcularSueldo());
console.log("Nombre: " + programador.nombre + "\nLenguaje: " + programador.lenguaje);
console.log("Sueldo: " + programador.calcularSueldo());
console.log("Nombre: " + senior.nombre + "\nLenguaje: " + senior.lenguaje);
console.log("Sueldo: " + senior.calcularSueldo());