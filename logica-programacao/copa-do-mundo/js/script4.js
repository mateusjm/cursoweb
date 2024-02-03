let indiceTela = 1
let tela = prompt(`Jogo ${indiceTela}`)

let numeros = tela.split(' ')
let num1 = numeros[0]
let num2 = numeros[1]

console.log(num1 + ' ' + num2)

const times1 = [ '', 'A', 'C', 'E', 'G', 'I', 'K', 'M', 'O'];
const times2 = [ '', 'B', 'D', 'F', 'H', 'J', 'L', 'N', 'P'];
let indice = 0
let timeAtual1 = times1[indice]
let timeAtual2 = times2[indice]

    while (indiceTela > indice) {

        indice++

        console.log(indice)

        if (indice < 8) {

            if (num1 > num2) {

            indiceTela++
                console.log(indiceTela)

            timeAtual1 = times1[indice]
            console.log(timeAtual1)
            tela += prompt(`Jogo ${indiceTela}`)  

            } else if (num2 > num1) {

            indiceTela++
            timeAtual2 = times2[indice]
            console.log(timeAtual2)
            tela += prompt(`Jogo ${indiceTela}`)  

            }

        }

    }





        

        

    



    





