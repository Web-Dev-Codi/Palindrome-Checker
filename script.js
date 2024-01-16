// const textInput = document.getElementById("text-input");
// const checkButton = document.getElementById("check-btn");
// const result = document.getElementById("result");
const hiddenContainer = document.getElementById("hidden-container");

// const textParser = (event) => {
// 	result.innerText = event.target.value;
// };

const arrayStr = ["racecar"];
const arrayStr2 = ["love"];


const _$palindromCheckerFn = (str) => {
	const answer = "";

	for (let i = 0; i < str.length; i++) {
		for (let j = 0; j < str.length; j++) {
			let one = [...str[i]];
			let two = [...str[j]].reverse();
			if (JSON.stringify(one) === JSON.stringify(two)) {
				console.log(`${str} is a palindrome`);
			} else if (JSON.stringify(one) !== JSON.stringify(two)) {
				console.log(`${str} is NOT a palindrome`);
			}
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
