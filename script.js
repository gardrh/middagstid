const generateBtn = document.getElementById("generate-btn");
const resultDiv = document.querySelector(".result");

generateBtn.addEventListener("click", () => {
  fetch("data.csv")
    .then(response => response.text())
    .then(text => {
      const data = text.trim().split("\n").map(row => row.split(","));
      const headers = data.shift();
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomRow = data[randomIndex];
      const resultHTML = headers.map((header, index) => `<p><strong>${header}:</strong> ${randomRow[index]}</p>`).join("");
      resultDiv.innerHTML = resultHTML;
    })
    .catch(error => console.error(error));
});

//const generateBtn1 = document.getElementById("generate-btn");
//const resultDiv = document.querySelector(".result");

//generateBtn1.addEventListener("click", () => {
//  fetch("data.csv")
 //   .then(response => response.text())
//    .then(text => {
 //     const data = text.trim().split("\n").map(row => row.split(","));
 //     const headers = data.shift();
 //     const randomIndex = Math.floor(Math.random() * data.length);
 //     const randomRow = data[randomIndex];
 //     const resultHTML = headers.map((header, index) => `<p><strong>${header}:</strong> ${randomRow[index]}</p>`).join("");
 //     resultDiv.innerHTML = resultHTML;
 //   })
 //   .catch(error => console.error(error));
//});

// Define an array of 7 results
const results = [
	"Mandag",
	"Tirsdag",
	"Onsdag",
	"Torsdag",
	"Fredag",
	"Lørdag",
	"Søndag"
];

// Get the button and result elements
const generateBtn1 = document.getElementById("generate-btn");
const resultDiv = document.querySelector(".result");

// Define the generateResult function
function generateResult() {
	// Get a random index from the results array
	const randomIndex = Math.floor(Math.random() * results.length);
	// Get the result at the random index
	const result = results[randomIndex];
	// Update the result div with the result
	resultDiv.innerHTML = result;
}

// Attach the generateResult function to the button's click event
generateBtn1.addEventListener("click", generateResult);


