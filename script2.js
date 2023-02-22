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

// Get the button element
const generateBtn = document.getElementById("generate-btn");

// Define the generateResult function
function generateResult() {
	// Get a random index from the results array
	const randomIndex = Math.floor(Math.random() * results.length);
	// Get the result at the random index
	const result = results[randomIndex];
	// Navigate to a new page with the result as a query parameter
	window.location = `result.html?result=${result}`;
}

// Attach the generateResult function to the button's click event
generateBtn.addEventListener("click", generateResult);
