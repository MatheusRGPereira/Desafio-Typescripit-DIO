let anyVoltou: any;
anyVoltou = 3;
anyVoltou = "olá";
anyVoltou = true;

let stringTeste: string = "verificar";
stringTeste = anyVoltou;

let unknownValor: unknown;
unknownValor = 3;
unknownValor = "olá";
unknownValor = true;
unknownValor = "olá de novo!"


let stringTeste2: string = 'agora vai';
//stringTeste2 = unknownValor;


if(typeof unknownValor === 'string')
{
    stringTeste2 = unknownValor;
}

function jogaErro(erro: string, codigo: number): never{
    throw{error: erro, code:codigo}
}

jogaErro('internal error', 500)
