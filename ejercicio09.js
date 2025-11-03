function calcularDistancias(x1, y1, x2, y2) {
  let distancia = Math.hypot(x2 - x1, y2 - y1);
  let d1 = Math.hypot(x1, y1);
  let d2 = Math.hypot(x2, y2);
  let suma = d1 + d2;

  console.log("Distancia: " + distancia);
  console.log("Suma de distancias: " + suma);
}

let x1 = parseFloat(prompt("Ingrese x1:"));
let y1 = parseFloat(prompt("Ingrese y1:"));
let x2 = parseFloat(prompt("Ingrese x2:"));
let y2 = parseFloat(prompt("Ingrese y2:"));
calcularDistancias(x1, y1, x2, y2);