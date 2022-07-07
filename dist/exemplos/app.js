"use strict";
const button = document.getElementById('button');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
function somaValidaComPrint(numero1, numero2, printarResultado, frase) {
    const resultado = numero1 + numero2;
    if (printarResultado) {
        console.log(frase + resultado);
    }
    return resultado;
}
let printarResultado = true;
let frase;
frase = "O número é ";
if (button) {
    button.addEventListener('click', () => {
        console.log(somaValidaComPrint(Number(input1.value), Number(input2.value), printarResultado, frase));
    });
}
