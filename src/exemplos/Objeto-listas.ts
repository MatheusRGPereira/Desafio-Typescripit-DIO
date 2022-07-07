const pessoa = {
    nome: "Bianca",
    idade: 25,
    profissão: "desenvolvedora"
}

const matheus: {nome:string, idade: number, profissao:string} = {
    nome: 'matheus',
    idade: 22,
    profissao: "desenvolvedor"

}
const carlos: {nome:string, idade: number, profissao:string} = {
    nome: 'carlos',
    idade: 27,
    profissao: "Pintor"

}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    Desenvolvedor,
    JogadorDeFutebol
}

interface Pessoa {
    nome:string,
    idade:number,
    profissao?:Profissao
}

interface Estudande extends Pessoa  {
    materias: string[]

}

const vanessa : Pessoa = {
    nome:"vanessa",
    idade: 28,
    profissao: Profissao.Desenvolvedora
}

const jorge: Pessoa = {
    nome:"Jorge",
    idade: 30,
    profissao: Profissao.JogadorDeFutebol
}

const otavio: Estudande= {
    nome:"otavio",
    idade: 21,
    materias:["Java,C#,Typescript"],
    profissao: Profissao.Desenvolvedor
}

function listar(lista:string[]){
    for (const item of lista) {
       console.log('- ', item )
    }
}

listar(otavio.materias);