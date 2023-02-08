// Define la función para calcular la probabilidad de ganar
function probabilityOfWinning(total) {
  return 1 / total;
}

// Obtiene los elementos HTML necesarios
const numberOfSlotsInput = document.querySelector("#numberOfSlotsInput");
const numberOfTurnsInput = document.querySelector("#numberOfTurnsInput");
const calculateButton = document.querySelector("#calculateButton");
const resultsTable = document.querySelector("#resultsTable");
const totalProbabilityCell = document.querySelector("#totalProbability");

// Añade el evento click al botón para calcular la probabilidad
calculateButton.addEventListener("click", function() {
  // Obtiene el número de casillas y giros introducidos por el usuario
  const numberOfSlots = parseInt(numberOfSlotsInput.value);
  const numberOfTurns = parseInt(numberOfTurnsInput.value);

  // Vacía la tabla de resultados
  resultsTable.querySelector("tbody").innerHTML = "";
  totalProbabilityCell.innerHTML = "";

  // Inicializa la probabilidad total
  let totalProbability = 0;

  // Juega el número de giros introducido por el usuario
  for (let i = 1; i <= numberOfTurns; i++) {
    let result = Math.floor(Math.random() * numberOfSlots) + 1;
    let probability = probabilityOfWinning(numberOfSlots);

    // Añade el resultado a la tabla
    const resultRow = document.createElement("tr");
    const resultCell1 = document.createElement("td");
    resultCell1.innerHTML = i;
    resultRow.appendChild(resultCell1);
    const resultCell2 = document.createElement("td");
    resultCell2.innerHTML = result;
    resultRow.appendChild(resultCell2);
    const resultCell3 = document.createElement("td");
    resultCell3.innerHTML = probability;
    resultRow.appendChild(resultCell3);
    resultsTable.querySelector("tbody").appendChild(resultRow);

    // Actualiza la probabilidad total
    totalProbability += probability;
  }

  // Muestra la probabilidad total en la tabla
  totalProbabilityCell.innerHTML = totalProbability;
});
