let indiceTela = 1
let tela = prompt(`Jogo ${indiceTela}`)

let numeros = tela.split(' ')
let num1 = numeros[0]
let num2 = numeros[1]

console.log(num1 + ' ' + num2)

const times = [ '', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'];
let indice = 0
let timeAtual = times[indice]

    while (indiceTela > indice) {

        indice++

        console.log(indice)

        if (indice < 8) {

            indiceTela++
            timeAtual = times[indice]
            console.log(timeAtual)
            tela += prompt(`Jogo ${indiceTela}`)   

        }

    }
