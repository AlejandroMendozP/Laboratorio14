function numeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let min = parseInt(prompt("Ingrese el minimo"));
let max = parseInt(prompt("Ingrese el maximo"));
console.log("El numero aleatorio es "+numeroAleatorio(min, max));