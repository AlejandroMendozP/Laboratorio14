function gradosARadianes(angulo){
    let radianes = angulo*(Math.PI/180);
    console.log("Coseno: "+Math.cos(radianes));
    console.log("Seno: "+Math.sin(radianes));
}
function radianesAGrados(angulo){
    console.log("Angulo en grados: "+(angulo*(180/Math.PI)));
}

let numero = parseFloat(prompt("Ingrese un angulo para convertir a radianes"));
let numero2 = parseFloat(prompt("Ingrese un angulo para convertir a grados"));
gradosARadianes(numero);
radianesAGrados(numero2);


