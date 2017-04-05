const geraPromise = (msg) => () =>{
    console.log(msg)
    return new Promise((resolve, reject) => setTimeout(resolve,3000))
}

const primeiro = geraPromise('primeira promise a executar')
const segundo = geraPromise('segundo promise a executar')
const terceiro = () => new Promise((resolve, reject) => { throw 'erro forçado' })
const quarto = geraPromise('quarto promise a executar')
const tratar = (err) => console.log(`Tratando: ${err}`)

const main = () => {

    primeiro()
        .then(segundo)
        .then(terceiro)
        .then(quarto)
        .catch(tratar)
}

main()