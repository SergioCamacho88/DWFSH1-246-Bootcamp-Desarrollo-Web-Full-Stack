/*const tabla = prompt("Tabla de multiplicar")
let totalsuma = 0;

for (let i = 1; i < 10; i++) {
    console.log(tabla, "x", i, "=", tabla * i)
    totalsuma = totalsuma + tabla * i
}
console.log ("la suma de la tabla es: ", totalsuma)*/

const notas = prompt("Notas a ingresar");
let promedioNotas = [];

for (let i = 0; i < notas; i++) {
    promedioNotas.push(prompt("Ingrese nota"));
    
}

console.log(promedioNotas);