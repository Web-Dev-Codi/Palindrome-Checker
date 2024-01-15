// const textInput = document.getElementById("text-input");
// const checkButton = document.getElementById("check-btn");
// const result = document.getElementById("result");
const hiddenContainer = document.getElementById("hidden-container");

// const textParser = (event) => {
// 	result.innerText = event.target.value;
// };

const arrayStr = ["racecar"];
const arrayStr2 = ["love"];

const palindromChecker = (str) => {
	let palindromEl = Array.from(str);
	let palindromEl2 = palindromEl.reverse();
	console.log("palindromEl2:", palindromEl2);
	for (let i = 0; i < str.length; i++) {
		if (palindromEl.indexOf(palindromEl2)) {
			palindromEl =
				hiddenContainer.innerText = `${str[i]} is a palindrom`;
			hiddenContainer.style.display = 'block'
			return palindromEl;
		} else if (palindromEl != palindromEl2) {
			palindromEl =
				hiddenContainer.innerText = `${str[i]} is NOT a palindrom`;
			return palindromEl;
		}
	}
};

console.log(palindromChecker(arrayStr));
console.log(palindromChecker(arrayStr2));

// const checkBtn = (event) => {
// 	event.preventDefault();
// 	palindromChecker(textParser);
// };

// const resultsDiv = (textParser) => {
// 	const displayDiv = document.createElement("p");
// 	const text = document.createTextNode(textParser);
//     result.appendChild(displayDiv);
// 	displayDiv.appendChild(text)
// 	palindromChecker(textParser)
// };

// textInput.addEventListener("input", textParser);
// checkButton.addEventListener("click", checkBtn);
