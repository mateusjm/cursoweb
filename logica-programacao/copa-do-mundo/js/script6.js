const oitavas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'];
const quartas = []
const semi = []
const final = []
let timeAtual = 0

    for (i=0; i < 8; i++) {

        let tela = prompt(`Jogo ${i + 1}`)

        let numeros = tela.split(' ')
        let num1 = numeros[0]
        let num2 = numeros[1]
        console.log(tela)

        if (num1 > num2) {
            console.log(oitavas[timeAtual])
            quartas[i] = oitavas[timeAtual]
            timeAtual += 1
            
        } else if (num2 > num1) {
            timeAtual += 1
            console.log(oitavas[timeAtual])
            quartas[i] = oitavas[timeAtual]

        }

        timeAtual++

        console.log(quartas)
        
    }

    timeAtual = 0

    for (i=0; i < 4; i++) {

        let tela = prompt(`Jogo ${9 + i}`)

        let numeros = tela.split(' ')
        let num1 = numeros[0]
        let num2 = numeros[1]
        console.log(tela)

        if (num1 > num2) {
            console.log(quartas[timeAtual])
            semi[i] = quartas[timeAtual]
            timeAtual += 1
            
        } else if (num2 > num1) {
            timeAtual += 1
            console.log(quartas[timeAtual])
            semi[i] = quartas[timeAtual]

        }

        timeAtual++

        console.log(semi)

    }

    timeAtual = 0

    for (i=0; i < 2; i++) {

        let tela = prompt(`Jogo ${13 + i}`)

        let numeros = tela.split(' ')
        let num1 = numeros[0]
        let num2 = numeros[1]
        console.log(tela)

        if (num1 > num2) {
            console.log(semi[timeAtual])
            final[i] = semi[timeAtual]
            timeAtual += 1
            
        } else if (num2 > num1) {
            timeAtual += 1
            console.log(semi[timeAtual])
            final[i] = semi[timeAtual]

        }

        timeAtual++

        console.log(final)

    }

    let tela = prompt(`Jogo 15`)
    let numeros = tela.split(' ')
    let num1 = numeros[0]
    let num2 = numeros[1]
    console.log(tela)

    if (num1 > num2) {
        console.log(final[0])

    } else if (num2 > num1) {
        console.log(final[1])
    }