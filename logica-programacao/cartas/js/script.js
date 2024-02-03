const cartas = []

    for (i=0; i < 5; i++) {
        let c = parseInt(prompt(`Digite o valor da carta ${i + 1}:`))
        cartas.push(c)
    }

    let verificarCarta = cartas.every(num => num >=1 && num <=13)

    if(verificarCarta) {
        if (cartas[0] < cartas[1] && cartas[1] < cartas[2] && cartas[2] < cartas[3] && cartas[3] < cartas[4]) {
            document.write('C');

        } else if (cartas[0] > cartas[1] && cartas[1] > cartas[2] && cartas[2] > cartas[3] && cartas[3] > cartas[4]) {
            document.write('D');

        } else {
            document.write('N');
        }
    } else {
        document.write('As cartas não estão entre 1 e 13.');
    }