
function operando (a,b,operando){
    let resultado;
    if (operando == "+"){
        resultado = a + b;
        console.log(resultado)
    }else if (operando == "-"){
        resultado = a - b;
        console.log(resultado)
    }
    else if (operando == "*"){
    resultado = a * b;
    console.log(resultado)
    }
    else if (operando == "/"){
        resultado = a / b;
        console.log(resultado)
    }
    
}

operando(5,7,"+")
operando(5,7,"-")
operando(5,7,"*")
operando(5,7,"/")