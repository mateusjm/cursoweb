let num = parseInt(prompt('Número:'))

    function verificarResto() {
        let resto = num%2

        if (resto > 0) {
            console.log('Ímpar')
        } else {
            console.log('Par')
        }
    }

    verificarResto()
