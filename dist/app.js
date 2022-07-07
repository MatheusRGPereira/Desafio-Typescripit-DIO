"use strict";
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Desenvolvedor"] = 0] = "Desenvolvedor";
    Profissao[Profissao["Desenvolvedora"] = 1] = "Desenvolvedora";
    Profissao[Profissao["Cozinheiro"] = 2] = "Cozinheiro";
    Profissao[Profissao["Admnistrador"] = 3] = "Admnistrador";
    Profissao[Profissao["Atriz"] = 4] = "Atriz";
    Profissao[Profissao["Padeiro"] = 5] = "Padeiro";
})(Profissao || (Profissao = {}));
const maria = {
    nome: "Maria",
    idade: 29,
    profissao: Profissao.Atriz
};
const roberto = {
    nome: "Roberto",
    idade: 19,
    profissao: Profissao
};
let pessoa2 = {};
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";
let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};
let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
};
