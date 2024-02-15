    // dimensionamento da tela como onrisize dinamico

    let altura = 0
    let largura = 0
    let vidas = 1
    let tempo = 15

    let criaMosquitoTempo = 1500

    let nivel = window.location.search // o search entrega somente o parametro que é definido no painel inicial
    nivel = nivel.replace('?', '') // usaremos o replace para substituir o ? para ''

    if (nivel === 'normal') {
        // 2000 milissegundos
        criaMosquitoTempo = 2000
    } else if (nivel === 'dificil') {
        // 1500 milissegundos
        criaMosquitoTempo = 1500
    } else if (nivel === 'chucknorris') {
        // 1000 milissegundos
        criaMosquitoTempo = 1000
    }
    
    function ajustaTamanhoPalcoJogo() {
        altura = window.innerHeight
        largura = window.innerWidth  
        
        console.log(altura, largura)
    }

    ajustaTamanhoPalcoJogo()

    let cronometro = setInterval(function() {
        
        tempo -= 1

        if (tempo < 0) {
            clearInterval(criaMosca)
            clearInterval(cronometro)
            window.location.href = 'vitoria.html'
        } else  {
            document.getElementById('cronometro').innerHTML = tempo
        }
        
    }, 1000)

    // ajustar a posição dinamica do mosquito

    function posicaoRandomica() {

        // remover mosquito anterior caso exista
        if (document.getElementById('mosquito')) {
            document.getElementById('mosquito').remove() 

            if (vidas > 3) {
                window.location.href = 'fim_de_jogo.html'
            } else {
                document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"   
                // vidas começa valendo 1 e acrescido a cada remove()
                vidas++
            }
            
            
        }
        

        let posicaoX = Math.floor(Math.random() * largura) - 90 // math.florr arredonda para baixo
        let posicaoY = Math.floor(Math.random() * altura) - 90 // math.florr arredonda para baixo

        posicaoX = posicaoX < 0 ? 0 : posicaoX // posicao X recebe 0 se for menor que 0
        posicaoY = posicaoY < 0 ? 0 : posicaoY // posicao Y recebe 0 se for menor que 0

            
        console.log(posicaoX, posicaoY)

        // criar o elemento de forma programática

        let mosquito = document.createElement('img') // criei um elemento html pelo createElement
        mosquito.src = 'imagens/mosquito.png' // coloquei a img nesse elemento apartir do src do DOM
        mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio() // atribui lado e tamanho aleatório pela classe fornecida pelo switch
        mosquito.style.left = posicaoX + 'px' // mudar a posição de left de forma programática e atribuir o valor em pixels
        mosquito.style.top = posicaoY + 'px' // mudar a posição de top de forma programática e atribuir o valor em pixels

        // para as coordenadas serem aplicadas o elemento precisa ser absoluto
        mosquito.style.position = 'absolute'
        mosquito.id = 'mosquito'
        mosquito.onclick = function() {
            this.remove()
        }

        // em alguns casos o mosquito ultrapassa a dimensão e cria uma barra de rolagem, para que isso não ocorra será decrementado 90 pixels na altura e largura, uma margem boa para que a imagem de 50x50  atue

        document.body.appendChild(mosquito) // atribui o elemento html no body, e ele se tornou filho

    }

    function tamanhoAleatorio() {
        let classe = Math.floor(Math.random() * 3)

        switch (classe) {
            case 0:
                return 'mosquito1'
            case 1:
                return 'mosquito2'
            case 2:
                return 'mosquito3'
        }
    }

    function ladoAleatorio() {
        let classe = Math.floor(Math.random() * 2)
        console.log(classe)

        switch (classe) {
            case 0:
                return 'ladoA'
            case 1:
                return 'ladoB'
        }
    }
        
    

    

    
    
    

