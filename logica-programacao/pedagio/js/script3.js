// l = comprimento da estrada
// d = distancia entre os pedagios
// k = custo por km percorrido
// p = valor de cada pedágio

let l = parseInt(prompt('Comprimento:'))
let d = parseInt(prompt('Distancia entre os pedágios:'))
let k = parseInt(prompt('Custo por Km:'))
let p = parseInt(prompt('Valor do Pedágio:'))

let inteiro = parseInt(l/d)
let custoTotal = 0

    if (inteiro > 1) {
        custoTotal += (l*k) + (p*inteiro)

    } else {
        custoTotal += (l*k)
    }

    console.log(custoTotal)
