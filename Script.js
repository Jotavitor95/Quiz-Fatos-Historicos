import readlineSync from "readline-sync";
import questoes from "./Dados/Dados.js";
import pokemon from "./Dados/Dados.js";

console.log("\n------- QUIZ FATOS HISTÓRICOS -------\n");
console.log("Seja bem-vindo jogador(a)!");

var score = 0;

let nome = readlineSync.question("Digite seu nome: ");

console.log(`\nOlá ${nome}, vamos começar o quiz!\n`);

let total_questoes = readlineSync.questionInt("Digite a quantidade de questoes (Max:30): ")

while (total_questoes > questoes.length){
    console.log("O máximo de questão são 30, por favor, tente novamente.");
    total_questoes = readlineSync.questionInt("Digite a quantidade de questoes (Max 30): ");        
}

console.log(`Você escolheu responder ${total_questoes}\n\n`);
console.log("Boa sorte!\n\n")

let questoesEmbaralhadas = questoes.sort(() => Math.random() - 0.5);
let questoesSelecionadas = questoesEmbaralhadas.slice(0, total_questoes);

questoesSelecionadas.forEach((questao) => {
    console.log(`Pergunta ${questao.id}: ${questao.pergunta}`);
    let resposta = readlineSync.question("Digite sua resposta: ");
        if (resposta == questao.resposta) {
            console.log("Resposta correta!\n");
            score++;
        } else {
            console.log("Resposta incorreta!\n");
        };
});

let pontuacao = `Você acertou ${score} de ${total_questoes}`;

if (score >= 1 && score <= 3){
    console.log(`Quiz encerrado!\n\n${pontuacao}`);
} else if (score >= 4 && score <= 6){
    console.log(pontuacao);
} else if (score >= 7 && score <= 9){
    console.log(pontuacao);
} else if (score >= 10){
    console.log(pontuacao);
} else {
    console.log(pontuacao);
};
