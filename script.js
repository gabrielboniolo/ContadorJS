function contar(){
    let ini = document.getElementById('txti')    
    let fim = document.getElementById('txtf')
    let cas = document.getElementById('txtc')
    let res = document.getElementById('res')
    if(ini.value.length == 0 || fim.value.length == 0 || cas.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    
    }
    else {
      res.innerHTML = "Contando: <br>"
      let i = Number(ini.value)
      let f = Number(fim.value)
      let c = Number(cas.value)
      if(c <= 0) {
        alert('Número de casas inválido! Adicionando 1 ao número de casas para poder realizar a contagem.')
        c += 1
      }
    if(i < f) {
        //contagem crescente
        for(let ct = i; ct<=f; ct+= c) {
            res.innerHTML += `${ct} \u{1F449} `
          }
    }
    
    else{
        //contagem decrescente
        for(let ct = i; ct>=f; ct -= c)
        res.innerHTML += `${ct} \u{1F449}`
    }
        res.innerHTML += `\u{1F3C1}`
    }
}