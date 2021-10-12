"use strict";

//Задание №1.
function mul(...rest) {
	let res = rest.reduce( function(acc, value) {
		if (typeof value === "number") {
			acc *= value;
		}
		return acc;
	});
	if (res === null) {
		res = 0;
	}
   return res;
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0

//Задание №2.
let calc = {
	x: 2,
	y: 3,
	mul: function () {
		let f = () => console.log(this.x * this.y);
		return f();
	}
};
setTimeout(calc.mul(), 2000); // 6, через 2 секунды

