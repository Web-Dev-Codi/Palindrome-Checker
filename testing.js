const arrayStr = ["racecar"];
const arrayStr2 = ["love"];

const palindromChecker = (str) => {
	let palindromEl = Array.from(str);
	let palindromEl2 = palindromEl.reverse();
	console.log("palindromEl2:", palindromEl2);
	for (let i = 0; i < str.length; i++) {
		if (palindromEl.indexOf(palindromEl2)) {
			return true;
		} else if (palindromEl != palindromEl2) {
			return false
		}
	}
};

console.log(palindromChecker(arrayStr));
console.log(palindromChecker(arrayStr2));
