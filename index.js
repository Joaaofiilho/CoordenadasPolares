

class Topico {

    constructor(id, isCategoria, informacao){
        this.id = id;
        this.isCategoria = isCategoria;
        this.informacao = informacao;
        this.bolinhasRelacionadas = [];
    }

    adicionarTopico(topico){
        this.bolinhasRelacionadas.push(topico);
    }

    mostrarTopico() {
        this.bolinhasRelacionadas.forEach(topico => {
            console.log('====================================');
            console.log(topico.informacao);
            console.log('====================================');
        });
    }

}



popularVetorTopicos = () => {
    const topicos = [];

    topicos.push(new Topico(1, true, "bolinha 1"));
    topicos.push(new Topico(2, true, "bolinha 1"));
    topicos.push(new Topico(3, true, "bolinha 1"));
    topicos.push(new Topico(4, true, "bolinha 1"));
    topicos.push(new Topico(5, false, "bolinha 1"));
    topicos.push(new Topico(6, false, "bolinha 1"));
    topicos.push(new Topico(7, false, "bolinha 1"));
    topicos.push(new Topico(8, false, "bolinha 1"));
    topicos.push(new Topico(9, false, "bolinha 1"));
    topicos.push(new Topico(10, false, "bolinha 1"));
    topicos.push(new Topico(11, false, "bolinha 1"));
    topicos.push(new Topico(12, false, "bolinha 1"));
    topicos.push(new Topico(13, false, "bolinha 1"));
    topicos.push(new Topico(14, false, "bolinha 1"));
    topicos.push(new Topico(15, false, "bolinha 1"));

    return topicos;
}

//TODO: Organizar o metodo fazerCirculo para agora ele ler o ID dos vetor de topicos e modifica-lo para que ele adicione todos os potos na tela de uma unica vez.
fazerCirculoBolinhas = (raio, numBolinhas, desenharCirculo, id) => {

    const bolinhas = []
    const bolinhasCirculo = document.createElement('div')
    bolinhasCirculo.classList.add('bolinhasContainer')

    if(desenharCirculo)
        bolinhasCirculo.classList.add('circulo')
    
    bolinhasCirculo.style.width = raio*2 + "px"
    bolinhasCirculo.style.height = raio*2 + "px"

    document.body.appendChild(bolinhasCirculo)
      



    let iterratorID = id;
    for(var angulo = 0; angulo < 360; angulo += 360/numBolinhas) {
        
        const bolinhaBase = null;

        //simulando receber um topico
        if(angulo == 72){
            bolinhaBase = new Topico(iterratorID++,raio,"bolinhas");
            bolinhaBase.adicionarTopico(new Topico(0,raio,"bolinhas"));
            bolinhaBase.adicionarTopico(new Topico(1,raio,"bolinhas"));
        }else{
            bolinhaBase = new Topico(iterratorID++,raio,"bolinhas");
        }    
        
        
        const bolinha = document.createElement('div' + bolinhaBase.id);
        bolinha.classList.add('bolinha');

        const x = raio * Math.cos((Math.PI*angulo)/180);
        const y = raio * Math.sin((Math.PI*angulo)/180);
    
        const transform = `translate(${x}px, ${y}px)`;
        bolinha.style.transform = transform;
        
        bolinhas.push(bolinha);
    }

    bolinhas.forEach(bolinha => {
        bolinha.addEventListener('click', (event) => {
            console.log('====================================');
            console.log("CLICK NA BOLINHA");
            console.log('====================================');
            
            if (bolinha.classList.contains('selecionada'))
                bolinha.classList.remove('selecionada')
            else
            bolinha.classList.add('selecionada')    
        })

        bolinhasCirculo.appendChild(bolinha)
    })

    return iterratorID;

}

printarTudo = () => {
    let iterradorID = 0;
    
    iterradorID = fazerCirculoBolinhas(400, 10, false, iterradorID);
    iterradorID = fazerCirculoBolinhas(150, 5, true, iterradorID);
}

printarTudo();