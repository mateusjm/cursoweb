let saida = parseInt(prompt('0. Sair\n1. Competidores\n2. Mínimo de pontos\n3. Nota 1:\n4. Nota 2:'))
let n = 0 // competidores
let mp = 0 // mínimo de pontos
let num1 = 0 // nota 1
let num2 = 0 // nota 2
let c = 0 // classificados

    if(saida == 1) {

        n = parseInt(prompt('Competidores:'))
        console.log(n)
        saida++

        mp = parseInt(prompt('Mínimo de pontos:'))
        console.log(mp)

    }

    let i = 0

    while (i < n) {

        num1 = parseInt(prompt('Nota 1:'))
        console.log(num1)
        num2 = parseInt(prompt('Nota 2:'))
        console.log(num2)

        if (num1+num2 >= mp) {
            c++
        }

        i++

    }
    
    console.log(c)



