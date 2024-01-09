let saldoPartidas = partidas(97,39)

function partidas(vitoria, derrota){
    return ranking = vitoria - derrota
}

let nivel = ""

if (saldoPartidas < 10) {
    nivel = "Ferro"
} else if (saldoPartidas >= 11 && saldoPartidas <= 20){
    nivel = "Bronze"
} else if (saldoPartidas >= 21 && saldoPartidas <= 50){
   nivel = "Prata"
} else if (saldoPartidas > 51 && saldoPartidas <= 80){
    nivel = "Ouro"
} else if (saldoPartidas > 81 && saldoPartidas <= 90){
    nivel = "Diamante"
} else if (saldoPartidas > 91 && saldoPartidas <= 100){
    nivel = "Lendário"
} if (saldoPartidas >= 101){
    nivel = "Imortal"
}

console.log(`O herói tem saldo de ${ranking} vitórias e está no nível ${nivel}`)
