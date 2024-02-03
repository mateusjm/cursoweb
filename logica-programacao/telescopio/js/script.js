// A (1 ≤ A ≤ 10.000) = a área de abertura do telescópio
// N (1 ≤ N ≤ 10.000) = número de estrelas a serem estudadas
// F (1 ≤ F ≤ 20.000) =  fluxo de fótons

let a = parseInt(prompt('Digite a área de abertura do telescópio: '))
let n = parseInt(prompt('Digite o número de estrelas: '))
let f = []
let totalEstrela = 0

    if (a >= 1 && a <= 10000 && n >= 1 && n <= 10000) {

      for(i=0; i < n ; i++) {
        f.push(parseInt(prompt('Digite o número de fótons:')))
      }
    }

    for(i=0; i < f.length; i++) {
      let valorAtual = parseInt(f[i])

      if (valorAtual >= 1 && valorAtual <= 20000) {
        if (valorAtual * a >= 40000000) {
          totalEstrela++
        } else {
          console.log('Estrela não contada')
        }
      } else {
        console.log('Algum valor não está entre 1 e 20000')
      }
    }

    console.log('Estrela contada', totalEstrela)



   
