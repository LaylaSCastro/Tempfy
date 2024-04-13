// Selecionando o formulário
const form = document.querySelector('.temperature-converter')

// Lidando com o evento de envio do formulário
form.onsubmit= function (event) {
event.preventDefault() // Prevenir o comportamento padrão de envio do formulário

// Obtendo os valores selecionados e inseridos pelo usuário
const select = document.querySelector ('.temperature-scale-select').value
const input = Number(document.querySelector ('.temperature-input').value)

// Funções de conversão de temperatura
function FahrenheitToCelsius (value) {
    return (value - 32) * 5/9
}
function FahrenheitToKelvin (value) {
    return (value - 32) * 5/9 + 273.15
}
function CelsiusToFahrenheit(value) {
    return (value * 9/5) + 32
}
function CelsiusToKelvin (value) {
    return (value + 273.15)
}
function KelvinToCelsius (value) {
    return value - 273.15
}
function KelvinToFahrenheit (value) {
    return (value - 273.15) * 9/5 + 32 
}

// Função para exibir os resultados
function resultScale(firstResultScale, secondResultScale, firstResultValue, secondResultValue) {
    const firstResult = document.querySelector('#first-result')
    const secondResult = document.querySelector('#second-result')

    firstResult.innerHTML = `<h2 class="result-scale">${firstResultScale}</h2>
                             <span class="result-value">${firstResultValue}</span>`

    secondResult.innerHTML = `<h2 class="result-scale">${secondResultScale}</h2>
                              <span class="result-value">${secondResultValue}</span>`
}

// Verificando a unidade selecionada e aplicando a função correspondentes
if (select == 'fahrenheit') {
    resultScale('Kelvin', 'Celsius',FahrenheitToKelvin(input).toFixed(2), FahrenheitToCelsius(input).toFixed(2))
}
else if (select == 'celsius') {
    resultScale('Kelvin', 'Fahrenheit',CelsiusToKelvin(input).toFixed(2), CelsiusToFahrenheit(input).toFixed(2))
 }
 else if (select == 'kelvin') {
    resultScale('Fahrenheit', 'Celsius',KelvinToFahrenheit(input).toFixed(2), KelvinToCelsius(input).toFixed(2))
 }

// Exibindo a seção de resultados
const hiddenForm = document.querySelector('.temperature-results-container')

if(!hiddenForm.classList.contains('visible')){
    hiddenForm.classList.add('visible')
}

 }
