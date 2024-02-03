let n_bandejas = parseInt(prompt('Bandejas:'));
console.log(n_bandejas);
let latas_quebradas = 0;

for (let i = 0; i < n_bandejas; i++) {
    let lc = prompt('Latas e copos:');
    let bandeja = lc.split(' ');
    
    // Certifique-se de que há dois valores inseridos e ambos são números
    if (bandeja.length === 2 && !isNaN(bandeja[0]) && !isNaN(bandeja[1])) {
        let l = parseInt(bandeja[0]);
        let c = parseInt(bandeja[1]);
        console.log(lc);

        if (l > c) {
            latas_quebradas += c;
        }
    } else {
        console.log('Entrada inválida. Insira dois números separados por espaço.');
        i--; // Reduz o índice para que a bandeja atual seja reprocessada
    }
}

console.log('Total de latas quebradas:', latas_quebradas);





