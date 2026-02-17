function calcularRank(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    if (vitorias <= 10) nivel = "Ferro";
    else if (vitorias <= 20) nivel = "Bronze";
    else if (vitorias <= 50) nivel = "Prata";
    else if (vitorias <= 80) nivel = "Ouro";
    else if (vitorias <= 90) nivel = "Diamante";
    else if (vitorias <= 100) nivel = "Lendário";
    else nivel = "Imortal";

    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

function runFromArgsOrPrompt() {
    const args = process.argv.slice(2);
    if (args.length >= 2) {
        const vitorias = Number(args[0]);
        const derrotas = Number(args[1]);
        console.log(calcularRank(vitorias, derrotas));
        return;
    }

    const readline = require('readline');
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    rl.question('Digite a quantidade de vitórias: ', (vStr) => {
        rl.question('Digite a quantidade de derrotas: ', (dStr) => {
            const vitorias = Number(vStr);
            const derrotas = Number(dStr);
            console.log(calcularRank(vitorias, derrotas));
            rl.close();
        });
    });
}

runFromArgsOrPrompt();