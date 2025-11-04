class Figura{

    area(){
        return 0;
    }
    perimetro(){
        return 0;
    }
}

class Cuadrado extends Figura{
    constructor(lado) {
        super();
        this.lado = lado;
    }
    area() {
        return this.lado * this.lado;
    }
    perimetro(){
        return this.lado*4;
    }
}

class Triangulo extends Figura{
    constructor(base, altura, lado1, lado2, lado3) {
        super();
        this.base = base;
        this.altura = altura;
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }
    area() {
        return (this.base*this.altura)/2;
    }
    perimetro(){
        return this.lado1+this.lado2+this.lado3;
    }
}
