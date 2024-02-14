let n = parseInt(prompt('Tabuleiro:'))
let comida = 1

    for (i=1; i < n + 1; i++) {
        let l = (prompt(`Linha ${i}:`))
        console.log(l)
        //console.log(l.length)

        if ( l.length > n || l.length < n) {
            console.log('Erro')
        } else if (n === l.length) {
            
            if (l === 'A') {
                comida = 0
            } 

            console.log(comida)

        }

    }


