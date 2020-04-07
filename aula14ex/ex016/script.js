function contar(){
    var inicio = window.document.getElementById("txtinic")
    var fim = window.document.getElementById("txtfim")
    var passo = window.document.getElementById("txtpas")
    var res = window.document.getElementById("res")

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    }else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0){
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f){
            //Contagem crescente
            for(var c = i; c<= f; c+= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }else{
            //Contagem regressiva
            for(var c = i; c>= f; c-= p){
                res.innerHTML += ` ${c} \u{1F449}`

        }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
