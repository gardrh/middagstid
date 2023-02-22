// Define an array of 7 results
const results = [
	"Result 1",
	"Result 2",
	"Result 3",
	"Result 4",
	"Result 5",
	"Result 6",
	"Result 7"
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
