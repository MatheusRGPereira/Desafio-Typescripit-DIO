"use strict";
const pessoa = {
    nome: "Bianca",
    idade: 25,
    profissão: "desenvolvedora"
};
const matheus = {
    nome: 'matheus',
    idade: 22,
    profissao: "desenvolvedor"
};
const carlos = {
    nome: 'carlos',
    idade: 27,
    profissao: "Pintor"
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["Desenvolvedor"] = 3] = "Desenvolvedor";
    Profissao[Profissao["JogadorDeFutebol"] = 4] = "JogadorDeFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: "vanessa",
    idade: 28,
    profissao: Profissao.Desenvolvedora
};
const jorge = {
    nome: "Jorge",
    idade: 30,
    profissao: Profissao.JogadorDeFutebol
};
const otavio = {
    nome: "otavio",
    idade: 21,
    materias: ["Java,C#,Typescript"],
    profissao: Profissao.Desenvolvedor
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(otavio.materias);
