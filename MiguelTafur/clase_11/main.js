
function  IMC(){
    let peso = parseFloat(prompt("Ingrese el peso"));
    let altura = parseFloat(prompt("Ingrese la altura"));    
    const imc = Math.ceil(peso / (altura*altura));

    if( imc < 18.5 ){
        console.log("Su imc es ", imc, " se encuentra bajo de peso")
    }else if( imc > 18.5 && imc < 24.9  ){
        console.log("Su imc es ", imc, " se encuentra normal")
    }else if( imc > 25 && imc < 29.9  ){
        console.log("Su imc es ", imc, " se encuentra en sobrepeso")
    }else if( imc > 30  ){
        console.log("Su imc es ", imc, " se encuentra en obesidad")
    }
}

function celsius(){
    let celsius = parseFloat(prompt("Ingrese los grados centigrados"));
    let farenheit = ( celsius * 9/5) + 32;
    console.log( " la conversion de grados es ", farenheit , " grados farenheit")
}

function alreves(){
    let palabra = (prompt("Ingrese un texto"));
    let palabrainvertida = "";

    for (let i = palabra.length -1; i >= 0; i--) {
        palabrainvertida += palabra[i];
    }
    console.log(palabrainvertida)
}



function vocales() {
    let palabra = prompt("Ingrese un texto").toLowerCase(); 
    let contador = 0;
    let arrayPalabra = palabra.split('');
    let vocales = arrayPalabra.filter(function(letra) {
        return letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u';
    });

    contador = vocales.length;
    console.log("Tiene " , contador ,  " vocales" );
}
    

    
    
    
