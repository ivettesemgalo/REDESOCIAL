const url='https://github.com/guilhermeonrails/api'

async function visualizar informacoesGlobais(){
const res= await fetch(url)
const dados =  await res.json()
console.log(dados);
}
visualizarinformacoesGlobais()