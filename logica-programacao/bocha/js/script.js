var a = prompt('Digite o valor de A: ')
var b = prompt('Digite o valor de B: ')
var c = prompt('Digite o valor de C: ')

    // Verificar se os números estão entre 1 e 100
    if(a >= 1 && a <= 100 && b >= 1 && b <= 100 && c >= 1 && c <= 100 ) {
        document.write('A: ' + a + '  B: ' + b + '  C:' + c + '<br>')

        a = parseFloat(a)
        b = parseFloat(b)
        c = parseFloat(c)

        function VerificarViceCampeao() {
            if((a > b && a < c) || (a < b && a > c)) {
                document.write('A é Vice-campeão: ' + a)
            } else if ((b > a && b < c) || (b < a && b > c)) {
                document.write('B é Vice-campeão: ' + b)
            } else {
                document.write('C é Vice-campeão: ' + c)
            }
        }

        VerificarViceCampeao()

    } else {
        document.write('Os valores não estão entre 1 e 100')
    }

    





