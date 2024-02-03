// N (1 <= N <= 1000) e é quantidade de intervalos de tempo
// T (1 <= T <= 100) é o tempo de horas decorridas em h
// V (1 <= T <= 120) é a velocidade média em km/h
    
let n = prompt('Digite o valor de intervalos de tempo: ')

    if(n >= 1 && n <=1000) {

        let distanciaTotal = 0
        
        for (i = 0; i < n; i++) {
            t = prompt('Digite o tempo de horas decorridas: ')
            v = prompt('Digite a velocidade média: ')

            distanciaParcial = t * v
            distanciaTotal += distanciaParcial

        }

        document.write(distanciaTotal)

    } else {
        document.write('O valor de intervalos deve ser entre 1 e 1000. Tente novamente!')
    }




