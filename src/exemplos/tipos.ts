type input = string | number;

function somarValores(input1: input,input2: input){
    if (typeof input1 === "string" ||typeof  input2 === "string") {
        return input1.toString() + input2.toString();
    }else{
        return input1 + input2;
    }

}

console.log(somarValores(1, 5));
console.log(somarValores("olá ", "Como vai?"));
console.log(somarValores(5, "1"));