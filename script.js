const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");
const hiddenContainer = document.getElementById("hidden-container");

const textParser = (event) => {
	result.innerText = event.target.value;
};

const _$palindromCheckerFn = (str) => {
	for (let i = 0; i < str.length; i++) {
		const arrOne = [...str[i]];
		const arrTwo = [...arrOne].reverse();
		const arrStr = arrOne
			.toString()
			.replace(/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, "");
		const arrStrTwo = arrTwo
			.toString()
			.replace(/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, "");
		if (arrStr !== arrStrTwo) {
			console.log(`${str} is NOT a palindrome`);
		}
		if (arrStr === arrStrTwo) {
			console.log(`${str} is a palindrome`);
		}
	}
};

const checkBtn = (event) => {
	event.preventDefault();
	result.style.display = "block";
	textParser()
};


textInput.addEventListener("input", textParser);
checkButton.addEventListener("click", checkBtn);
