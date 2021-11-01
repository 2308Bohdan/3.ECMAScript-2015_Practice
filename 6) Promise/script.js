"use strict";
//Задание №1.
function createPromiseRandom(min, max, delay) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
		if (min < max) {
			const res = Math.random() * (max - min) + min;
			resolve(res);
		} else {
			reject(new Error("Par min > par max"));
		}
		}, delay);
	});
}
let p1 = createPromiseRandom(1, 100, 2000);
p1.then((res) => console.log(res));
p1.catch((err) => console.log(err));
let p2 = createPromiseRandom(1000, 100, 3000);
p2.then((res) => console.log(res));
p2.catch((err) => console.log(err));

//Задание №2.
new Promise(function (resolve, reject) {
	// Запрашиваем у пользователя число number при помощи prompt()
	setTimeout(() => {
		const number = Number(prompt("Enter number", ""));
		if (!isNaN(number)){ // Если пользователь ввел число - вызвать resolve(number)
			resolve(number);
		} else { // Если пользователь ввел не число - вызвать reject()
			reject()
		}
	}, 1000);
}).catch(function (error) {
	return new Promise(function (resolve, reject) {
		setTimeout( () => {
			let number;
			while (true) { // Запрашиваем у пользователя число number, пока он его не введет
				number = Number(prompt("Enter number", ""));
				if (!isNaN(number)) {
					break;
				}
			}
			// После ввода числа - вызвать resolve(number)
			resolve(number);
		}, 2000);
	});
}).then(function (result) {
   // Вывод number на экран
   console.log(result);
});


