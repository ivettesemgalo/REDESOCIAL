const url='https://github.com/guilhermeonrails/api'

async function visualizarInformacoesGlobais(){
const res= await fetch(url)
const dados = await res.json()
const paragrafo = document.createElement('p')
paragrafo.classList.add('graficos-conteiner_texto')
paragrafo.innerHTML = `Você sabia que o mundo tem ${dados.total_pessoas_mundo'} de pessoas e
que aproximadamente ${dados.total_pessoas_conectadas} estão conectadas em alguma rede social
e passam em média ${dados.tempo_medio} horas conectadas.`
console.log(paragrafo)

const conteiner = document.getElementById('graficos-container)
container.aapendChild(paragrafo)
}
visualizarinformacoesGlobais()