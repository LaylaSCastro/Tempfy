const form = document.querySelector('.temperature-converter')

form.onsubmit= function (event) {
event.preventDefault()

const select = document.querySelector ('.temperature-scale-select').value
const input = Number(document.querySelector ('.temperature-input').value)


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

function resultScale(firstResultScale, secondResultScale, firstResultValue, secondResultValue) {
    const firstResult = document.querySelector('#first-result')
    const secondResult = document.querySelector('#second-result')

    firstResult.innerHTML = `<h2 class="result-scale">${firstResultScale}</h2>
                             <span class="result-value">${firstResultValue}</span>`

    secondResult.innerHTML = `<h2 class="result-scale">${secondResultScale}</h2>
                              <span class="result-value">${secondResultValue}</span>`
}

if (select == 'fahrenheit') {
    resultScale('Kelvin', 'Celsius',FahrenheitToKelvin(input).toFixed(2), FahrenheitToCelsius(input).toFixed(2))
}
else if (select == 'celsius') {
    resultScale('Kelvin', 'Fahrenheit',CelsiusToKelvin(input).toFixed(2), CelsiusToFahrenheit(input).toFixed(2))
 }
 else if (select == 'kelvin') {
    resultScale('Fahrenheit', 'Celsius',KelvinToFahrenheit(input).toFixed(2), KelvinToCelsius(input).toFixed(2))
 }

const hiddenForm = document.querySelector('.temperature-results-container')

hiddenForm.classList.add('hidden')

 }

