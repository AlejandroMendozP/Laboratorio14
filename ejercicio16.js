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