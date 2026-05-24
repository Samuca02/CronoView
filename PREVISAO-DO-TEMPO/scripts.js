

const key = "a0bf3c4bd66dd1bd0e07e8824e3a938f"

function colocarDadosNaTela(dados) {
    document.querySelector(".titulo-cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`


}


async function buscarCidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    colocarDadosNaTela(dados)
}


function cliqueiBotao() {
    const cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)

}
    document.querySelector(".input-cidade")
.addEventListener("keydown", function(event){

    if(event.key === "Enter"){
        cliqueiBotao()
    }

})