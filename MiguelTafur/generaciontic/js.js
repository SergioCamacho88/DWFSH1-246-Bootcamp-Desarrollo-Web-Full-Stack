/*let myNumber = 10;
let myString = "Hola, mundo";
let myBoolean = true;
let myObject ={
    nombre: "ChatGPT",
    version: "4"
};

let myNull = null
let myUndefined;

console.log( myNumber + myString)
console.log( myObject.nombre)
console.log(myObject.apellido)*/
/*
//calcular media 
function media (arrayNumeros){
    let sum = 0;
    for ( let i = 0; i<arrayNumeros.length; i++){
        sum += arrayNumeros[i];
    }
    return sum/arrayNumeros.length;
}

console.log(media([1,2,3,4,5]));

//invertir cadena
function invertirCadena(cadena){
    return cadena.split("").reverse().join("")
}
console.log(invertirCadena("Hola"));


//es palindromo?
function palindromo(cadena){
    let cadenaReversa = invertirCadena(cadena)
    return cadena === cadenaReversa
}
console.log(palindromo("radarr"));*/


//imprimiendo numeros del 1 a 10
/*for (let index = 0; index <= 10; index++) {
    console.log(index)
}*/

/*//sumando los numeros del 1 a 100 resultado 5050
let i = 1
let sum = 0

while (i <= 100 ){
    sum += i;
    i++;

}
console.log(sum)

//sumando los numeros del 1 a 100 resultado 5050
let suma = 0;
for (let i = 1; i <= 100; i++) {
    suma += i;
}
console.log(suma); // Debería imprimir 5050*/

/*// Tabla de multiplicar del 1 al 10
for (let i = 1; i <= 10; i++) {
    console.log(`Tabla del ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log(''); // Línea en blanco para separar las tablas
}*/

/*Usa un bucle `for` paraimprimir los números del 1 al 20, pero por cada número que seamúltiplo de 3, 
en lugar del número, imprime la palabra "Fizz". Por cadanúmero que sea múltiplo de 5, imprime "Buzz". 
Y para los números queson múltiplos de ambos, 3 y 5, imprime "FizzBuzz".*/

/*for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}*/

/*Crea un bucle`while` que comienza en 100 y se 
reduce a la mitad en cada iteración,hasta que el 
número sea menor que 1. Imprime cada paso en la consola*/
/*
let a = 100;

while ( a > 1){
    console.log(a);
    a/=2
    
}*/

/*for (let i = 1; i < 20; i++) {
    if(i % 2 === 0){
        
        console.log(i + " Es par")
    }else{
        
        console.log(i + " Es impar")
    }
    
}*/

/*var elemento = document.getElementById("button");

elemento.onmouseover = function(){
    elemento.style.backgroundColor = "red"
}

elemento.onmouseout = function(){
    elemento.style.backgroundColor = "white"
}

elemento.addEventListener('click',()=>{
    suma(2,4)
    console.log("clic")
    alert(resultado);
});

function suma(a,b){
    return a+b;
}
let resultado = suma(2,4)
console.log (suma(2,4))*/

/*//Creamos una variable y la buscamos por su id
let title = document.getElementById('title');

//cambiamos el contenido de ese elemento accediendo por la variable
title.textContent = ("Logrado");

//cambiamos su backgroud
title.style.backgroundColor = ('red');

//le damos una funcion que cuando el mouse pase por ahi tenga un bkg diferente
title.onmouseover = function(){
    title.style.backgroundColor = 'blue'
}
//le damos una funcion que cuando el mouse NO pase por ahi tenga un bkg diferente
title.onmouseout = function(){
    title.style.backgroundColor = 'white'
}
//creamos un evento que escuche un dbclick elimite de la pagina 
title.addEventListener('dblclick', (event)=>{
    event.target.remove();
})*/


//Finalmente, utilizamos JavaScript para agregarinteractividad y mostrar el contenido correspondienteal hacer clic en una pestaña:
/*const tabs = document.querySelectorAll('.tab');
const contenidoTabs =document.querySelectorAll('.contenido-tab');
tabs.forEach((tab) => {
tab.addEventListener('click', () => {
// Ocultar todo el contenido de las pestañas
contenidoTabs.forEach((contenido) => {
contenido.style.display = 'none';
});
// Mostrar el contenido correspondiente a lapestaña seleccionada
const contenidoId = tab.getAttribute('id');
const contenidoSeleccionado = document.getElementById(`contenido${contenidoId}`);
contenidoSeleccionado.style.display = 'block';
});
});*/

const taskInput =document.getElementById('taskInput');
const addTaskButton =document.getElementById('addTaskButton');
const taskList =document.getElementById('taskList');
addTaskButton.addEventListener('click',function() {
const taskText = taskInput.value;
if (taskText.trim() !== '') {
const newTask =document.createElement('div');
newTask.classList.add('task');
newTask.textContent = taskText;
taskList.appendChild(newTask);
taskInput.value = '';
}
});