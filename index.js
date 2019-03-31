

fazerCirculoBolinhas = (raio, numBolinhas, desenharCirculo) => {
    var bolinhas = []
    var bolinhasCirculo = document.createElement('div')
    bolinhasCirculo.classList.add('bolinhasContainer')
    if(desenharCirculo)
        bolinhasCirculo.classList.add('circulo')
    
    bolinhasCirculo.style.width = raio*2 + "px"
    bolinhasCirculo.style.height = raio*2 + "px"

    document.body.appendChild(bolinhasCirculo)

    var bolinha = document.createElement('div')
    bolinha.classList.add('bolinha')

    for(var angulo = 0; angulo <= 360; angulo += 360/numBolinhas) {
        var newB = bolinha.cloneNode(false)
    
        var x = raio * Math.cos((Math.PI*angulo)/180)
        var y = raio * Math.sin((Math.PI*angulo)/180)
    
        var transform = `translate(${x}px, ${y}px)`
        newB.style.transform = transform
        
        bolinhas.push(newB)
    }

    bolinhas.forEach(bolinha => {
        bolinha.addEventListener('click', (event) => {
            if (bolinha.classList.contains('selecionada'))
                bolinha.classList.remove('selecionada')
            else
                bolinha.classList.add('selecionada')    
        })

        bolinhasCirculo.appendChild(bolinha)
    })
}

fazerCirculoBolinhas(150, 5, true)
fazerCirculoBolinhas(300, 20, false)