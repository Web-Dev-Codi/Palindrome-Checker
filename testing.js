const strArr = ["racecar"];
const strArr2 = ["love"];
const eye = ["eye"];
const _eye = ["_eye"];
const race_car = ["race car"];
const not_a_palindrom = ["not a palindrom"];
const panama = ["A man, a plan, a canal. Panama"];
const never_odd_or_even = ["never odd or even"];
const nope = ["nope"];
const almostomla = ["almostomla"];
const myAge = ["My age is 0, 0 si ega ym."];
const eyeFor = ["1 eye for of 1"];
const zeroOne = ["0_0 (: /- :) 0-0"];
const fiveFour = ["five|_/|four"];

const _$palindromCheckerFn = (str) => {
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
			strOne = `${str} is NOT a palindrom`;
			return strOne;
		}
		if (newOne === newTwo) {
			strTwo = `${str} is a palindrom`;
			return strTwo;
		}
	}
};

console.log(_$palindromCheckerFn(strArr));
console.log(_$palindromCheckerFn(strArr2));
console.log(_$palindromCheckerFn(eye));
console.log(_$palindromCheckerFn(_eye));
console.log(_$palindromCheckerFn(race_car));
console.log(_$palindromCheckerFn(not_a_palindrom));
console.log(_$palindromCheckerFn(panama));
console.log(_$palindromCheckerFn(never_odd_or_even));
console.log(_$palindromCheckerFn(nope));
console.log(_$palindromCheckerFn(almostomla));
console.log(_$palindromCheckerFn(myAge));
console.log(_$palindromCheckerFn(eyeFor));
console.log(_$palindromCheckerFn(zeroOne));
console.log(_$palindromCheckerFn(fiveFour));
