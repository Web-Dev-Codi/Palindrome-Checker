const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");
const resetBtn = document.getElementById("reset-btn");

const _$palindromCheckerFn = (str) => {
	const para = document.createElement("p");
	let strOne = "";
	let strTwo = "";
	for (let i = 0; i < str.length; i++) {
		const strArray = Array.from(str[i]);
		const strArrayTwo = Array.from(strArray).slice().reverse();
		let newOne = strArray
			.toString()
			.toLowerCase()
			.replace(/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, "");
		let newTwo = strArrayTwo
			.toString()
			.toLowerCase()
			.replace(/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, "");

		if (newOne !== newTwo) {
			result.appendChild(para);
			result.style.display = "block";
			para.className = "user-input";
			strTwo = `${str} is NOT a palindrom`;
			para.innerText = strTwo;

		}
		if (newOne === newTwo) {
			result.appendChild(para);
			result.style.display = "block";
			para.className = "user-input";
			strOne = `${str} is a palindrom`;
			para.innerText = strOne;
		
		}
	}
};


const resetUI = (event) => {	
	textInput.value = "";
};


const checkBtn = (event) => {
	const str = textInput.value;
	if (!str) {
		alert("Please input a value");
		result.style.display = "none";
	}
	if (str) {
		resetUI();
	}
	_$palindromCheckerFn(str);
};

checkButton.addEventListener("click", checkBtn);
resetBtn.addEventListener("click", resetUI);
