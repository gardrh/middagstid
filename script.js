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
    // Navigate to a new page with the result as a query parameter
	window.location = `result.html?result=${result}`;
}
    })
    .catch(error => console.error(error));
});

// Get the result element and parse the query string
const resultDiv = document.querySelector(".result");
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// Set the result text to the query parameter value
resultDiv.innerHTML = urlParams.get("result");


