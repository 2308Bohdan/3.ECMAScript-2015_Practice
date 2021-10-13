"use strict";

//Задание №1.
function mul(...rest) {
	
	
	let res = rest.filter((value) => typeof value === "number");
	if (res.length === 0) {
		res = 0;
	} else {
		res = res.reduce((acc, value) => acc *= value);
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
		return () => console.log(this.x * this.y);
	}
};
setTimeout(calc.mul(), 2000); // 6, через 2 секунды

//Задание №3.
let server = {
	data: 0,
	convertToString: function (call) {
		call( () => this.data + "" );
    }
};
let client = {
	server: server,
	result: "",
	calc: function (data) {
		this.server.data = data;
		this.server.convertToString(this.notification());
	},
	notification: function () {
		return (back) => this.result = back();
	}
};
client.calc(123);

console.log(client.result); // "123"
console.log(typeof client.result); // "string"
