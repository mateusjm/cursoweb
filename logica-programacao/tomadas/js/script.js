var t1 = prompt('Digite o valor de tomadas de T1: ')
var t2 = prompt('Digite o valor de tomadas de T2: ')
var t3 = prompt('Digite o valor de tomadas de T3: ')
var t4 = prompt('Digite o valor de tomadas de T4: ')


    if(t1 >= 2 && t1 <= 6 && t2 >= 2 && t2 <= 6 && t3 >= 2 && t3 <= 6 && t4 >= 2 && t4 <= 6) {
        t1 = parseFloat(t1)
        t2 = parseFloat(t2)
        t3 = parseFloat(t3)
        t4 = parseFloat(t4)

        var totalTomadas = t1

        totalTomadas += t2 - 1
        totalTomadas += t3 - 1
        totalTomadas += t4 - 1

        document.write(totalTomadas)

    } else {
        document.write('Algum dos valores inseridos não respeita as condições. Tente novamente! Insira um número entre 2 e 6')
    }

    





