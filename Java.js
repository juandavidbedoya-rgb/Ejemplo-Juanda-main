
const metaSemanal = 1200000; // Meta: $1.200.000 COP
let ventasAcumuladas = 0;    // Operador de asignaciones (=)

console.log("=== REGISTRO SEMANAL DE VENTAS: URBAN GLOW ===");

for (let dia = 1; dia <= 7; dia++) {

    let ventaDelDia = (dia % 2 === 0) ? 210000 : 149900; 

    ventasAcumuladas += ventaDelDia;

    console.log(`Día ${dia}: Venta de $${ventaDelDia} COP | Acumulado total: $${ventasAcumuladas} COP`);
}

console.log("\n=== EVALUACIÓN DE RESULTADOS ===");
if (ventasAcumuladas >= metaSemanal) {
    console.log(`¡Meta cumplida! Se vendió un total de $${ventasAcumuladas} COP.`);
} else if (ventasAcumuladas >= metaSemanal * 0.8) {
    console.log(`Casi se logra la meta. Se alcanzó el 80% con $${ventasAcumuladas} COP.`);
} else {
    let faltante = metaSemanal - ventasAcumuladas;
    console.log(`Falta ventas para la meta. Quedaron faltando $${faltante} COP.`);
}

console.log("\n=== CÁLCULO DE META EXTRA DE EXPANSION ===");

const metaExtra = 2000000; // Meta de expansión: $2.000.000 COP
let ventasAdicionales = 0; // Contador de ventas extra (++)

while (ventasAcumuladas < metaExtra) {
    ventasAcumuladas += 135000; 
    ventasAdicionales++;       
}

console.log(`Para llegar a la meta extra de $${metaExtra} COP se requirieron ${ventasAdicionales} ventas adicionales.`);
console.log(`Total final de ventas URBAN GLOW: $${ventasAcumuladas} COP.`);