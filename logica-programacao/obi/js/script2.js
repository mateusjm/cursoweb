let saida = parseInt(prompt('0. Sair\n1. Competidores\n2. Mínimo de pontos\n3. Nota 1:\n4. Nota 2:'))
let mp = 0 // minimo de pontos
let num1 = 0 // nota 1
let num2 = 0 // nota 2
let c = 0 // competidores passaram

    while (saida != 0) {

        let n = parseInt(prompt('Competidores:'))
        console.log(n)
        saida++
        
        if (n < n + 1) {

            while (saida == 2) {

                mp = parseInt(prompt('Mínimo de pontos:'))
                console.log(mp)
                saida++

            }

            while (saida == 3) {

                num1 = parseInt(prompt('Nota 1:'))
                console.log(num1)
                saida++

            }

            while (saida == 4) {
                
                num2 = parseInt(prompt('Nota 2:'))
                console.log(num2)
                saida++

            }

            if (num1+num2 >= mp) {
                c++
                console.log(c)
            }

        }

    }
