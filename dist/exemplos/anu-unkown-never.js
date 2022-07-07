"use strict";
let anyVoltou;
anyVoltou = 3;
anyVoltou = "olá";
anyVoltou = true;
let stringTeste = "verificar";
stringTeste = anyVoltou;
let unknownValor;
unknownValor = 3;
unknownValor = "olá";
unknownValor = true;
unknownValor = "olá de novo!";
let stringTeste2 = 'agora vai';
//stringTeste2 = unknownValor;
if (typeof unknownValor === 'string') {
    stringTeste2 = unknownValor;
}
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('internal error', 500);
