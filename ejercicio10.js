const calificaciones = [12, 15, 18, 10, 20];
const max = Math.max(...calificaciones);
const normalizadas = [];
for (let i = 0; i < calificaciones.length; i++) {
  normalizadas.push(calificaciones[i] / max);
}
console.log("Calificaciones originales:", calificaciones);
console.log("Calificaciones normalizadas:", normalizadas);