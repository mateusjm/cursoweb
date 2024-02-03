let saida = parseInt(prompt('0. Sair\n1. Competidores\n2. Mínimo de pontos\n3. Nota 1:\n4. Nota 2:'))
let n = 0 // n quantos competiram
let n1 = 0
let mp = 0
let c = 0 // n de competidores passaram

    while (saida != 0) {

        n = parseInt(prompt('Competidores:'))
        saida++

        if (saida == 2) {

            mp = parseInt(prompt('Mínimo de pontos:'))
            console.log(mp)
            saida++

        }

        else if (saida == 3) {

            n1 = parseInt(prompt('Nota 1:'))
            console.log(n1)
            saida++

        }

        else if (saida == 4) {

            n2 = parseInt(prompt('Nota 2:'))
            console.log(n2)
            saida = 0

            if(n1+n2 >= mp) {
                c++
                console.log(c)
            }

        }

    }