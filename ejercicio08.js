let array = new Array();
let string = "";
for(let i = 0; i<6; i++){
    array[i]=Math.round(Math.random()*10);
    string+=array[i];
}
console.log("La contraseña es "+string);