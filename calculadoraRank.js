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
module.exports = calcularRank;

const args = process.argv.slice(2);
if (require.main === module) {
    if (args.length >= 2) {
        const v = Number(args[0]);
        const d = Number(args[1]);
        console.log(calcularRank(v, d));
    } else {
        const exemplos = [
            { v: 5, d: 2 },
            { v: 15, d: 3 },
            { v: 30, d: 10 },
            { v: 60, d: 20 },
            { v: 85, d: 5 },
            { v: 95, d: 4 },
            { v: 150, d: 10 }
        ];

        for (let i = 0; i < exemplos.length; i++) {
            const p = exemplos[i];
            console.log(calcularRank(p.v, p.d));
        }
    }
}
