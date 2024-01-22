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
	return str;
}

function resetUI(event) {
	textInput.value = "";
	checkButton.className = "palindrom-btn";
	result.remove();
	resetBtn.style.display = 'none'
	
}

function checkBtn(event) {
	if (!textInput.value) {
		alert("Please input a value");
	}
	if (textInput.value) {
		const str = textInput.value;
		checkButton.style.display = "none";
		resetBtn.className = "palindrome-reset-btn";
		isPalindrome(textInput.value);
		return str;
	}
}

resetBtn.addEventListener("click", resetUI);
textInput.addEventListener("input", inputValue);
checkButton.addEventListener("click", checkBtn);
