// https://calculator.swiftutors.com/specific-heat-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const specificHeatRadio = document.getElementById('specificHeatRadio');
const quantityofHeatRadio = document.getElementById('quantityofHeatRadio');
const massRadio = document.getElementById('massRadio');
const changeinTemperatureRadio = document.getElementById('changeinTemperatureRadio');

let specificHeat;
let quantityofHeat = v1;
let mass = v2;
let changeinTemperature = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

specificHeatRadio.addEventListener('click', function() {
  variable1.textContent = '(Q) Quantity of Heat (J)';
  variable2.textContent = '(m) Mass (g)';
  variable3.textContent = '(ΔT) Change in Temperature (°C)';
  quantityofHeat = v1;
  mass = v2;
  changeinTemperature = v3;
  result.textContent = '';
});

quantityofHeatRadio.addEventListener('click', function() {
  variable1.textContent = '(c) Specific Heat (J/g °C)';
  variable2.textContent = '(m) Mass (g)';
  variable3.textContent = '(ΔT) Change in Temperature (°C)';
  specificHeat = v1;
  mass = v2;
  changeinTemperature = v3;
  result.textContent = '';
});

massRadio.addEventListener('click', function() {
  variable1.textContent = '(c) Specific Heat (J/g °C)';
  variable2.textContent = '(Q) Quantity of Heat (J)';
  variable3.textContent = '(ΔT) Change in Temperature (°C)';
  specificHeat = v1;
  quantityofHeat = v2;
  changeinTemperature = v3;
  result.textContent = '';
});

changeinTemperatureRadio.addEventListener('click', function() {
  variable1.textContent = '(c) Specific Heat (J/g °C)';
  variable2.textContent = '(Q) Quantity of Heat (J)';
  variable3.textContent = '(m) Mass (g)';
  specificHeat = v1;
  quantityofHeat = v2;
  mass = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(specificHeatRadio.checked)
    result.textContent = `Specific Heat = ${computeSpecificHeat()} J/g °C`;

  else if(quantityofHeatRadio.checked)
    result.textContent = `Quantity of Heat = ${computeQuantityofHeat().toFixed(2)} J`;

  else if(massRadio.checked)
    result.textContent = `Mass = ${computeMass().toFixed(2)} g`;

  else if(changeinTemperatureRadio.checked)
    result.textContent = `Change in Temperature = ${computeChangeinTemperature().toFixed(2)} °C`;
})

// calculation

function computeSpecificHeat() {
  return Number(quantityofHeat.value) / (Number(mass.value) * Number(changeinTemperature.value));
}

function computeQuantityofHeat() {
  return Number(specificHeat.value) * (Number(mass.value) * Number(changeinTemperature.value));
}

function computeMass() {
  return Number(quantityofHeat.value) / (Number(specificHeat.value) * Number(changeinTemperature.value));
}

function computeChangeinTemperature() {
  return Number(quantityofHeat.value) / (Number(mass.value) * Number(specificHeat.value));
}