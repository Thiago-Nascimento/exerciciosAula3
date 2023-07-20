import { exercicio1 } from "./moduloExercicio1.js"

// let prompt = require("prompt-sync")()

import promptSync from 'prompt-sync'
let prompt = promptSync();

let resposta;

// Digite o numero do exercicio que você quer exibir, se quiser sair digite sair
do {
    resposta = prompt("Digite o numero do exercicio que você quer exibir, se quiser sair digite 'sair': ")

    switch (resposta) {
        case 1:
            exercicio1()
            break;

        default:
            break;
    }
} while (resposta != "sair");






exercicio1()


function olaPessoa(nome_, idade_) {
    
    let pessoa = {
        nome: nome_,
        idade: idade_,
    }
    
    console.log("Olá " + pessoa.nome + "! Você está com " + pessoa.idade + " anos")
}