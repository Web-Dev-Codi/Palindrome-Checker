const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");
const resetBtn = document.getElementById("reset-btn");

function isPalindrome(str) {
	const para = document.createElement("p");
	let formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
	let reversedStr = formattedStr.split("").reverse().join("");
			if (formattedStr === reversedStr) {
				para.className = "user-input";
				result.appendChild(para);
				result.style.display = "block";
				formattedStr = `${str} is a palindrom`;
				console.log(`${str} is a palindrom`);
				para.innerText = formattedStr;
			} else {
				para.className = "user-input";
				result.appendChild(para);
				result.style.display = "block";
				reversedStr = `${str} is NOT a palindrom`;
				console.log(`${str} is NOT a palindrom`);
				para.innerText = reversedStr;
			}
	return formattedStr === reversedStr;
}


function inputValue() {
	const str = textInput.value;
	return str

}

function resetUI(event) {
	textInput.value = "";
}

function checkBtn(str) {
	if (!textInput.value) {
		alert("Please input a value");
	}
	if (textInput.value) {
		const str = textInput.value;
		isPalindrome(textInput.value);
		return str;
	}

}

textInput.addEventListener("input", inputValue);
checkButton.addEventListener("click", checkBtn);
resetBtn.addEventListener("click", resetUI);
