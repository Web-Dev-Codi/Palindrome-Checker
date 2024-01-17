const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

const _$palindromCheckerFn = (str) => {
	let para = document.createElement("p");
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
			result.appendChild(para);
			para.className = "user-input";
			para.innerText = `${str} is NOT a palindrom`;
		}
		if (arrStr === arrStrTwo) {
			result.appendChild(para);
			para.className = "user-input";
			para.innerText = `${str} is a palindrom`;
		}
	}
};

const deleteCloseElement = () => {
	result.style.display = "none";
	para.innerText = "";
};

const checkBtn = (event) => {
	event.preventDefault();
	const str = textInput.value;
	if (!textInput.value) {
		alert("Please input a value");
		result.style.display = "none";
		return;
	} else if (textInput.value) {
		result.style.display = "block";
	}
	textInput.value = "";
	_$palindromCheckerFn(str);
};

result.addEventListener("click", deleteCloseElement);
checkButton.addEventListener("click", checkBtn);
textInput.addEventListener("keydown", deleteCloseElement);
