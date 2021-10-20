"use strict";
//Задание №3.
class Square {
	constructor() {
		this._side = 0;
	}
	get side() {
		return this._side;
	}
	set side(value) {
		if (typeof value === "number" && value > 0 && isFinite(value)) {
			this._side = value;
		}
	}
	get perimeter() {
		return this._side * 4; 
	}
}
//Без расширения 
class Cube1 extends Square {
	constructor() {
		super();
	}
	get perimeter() {
		return this._side * 12;
	}
}
//С расширением 
class Cube2 extends Square {
	constructor() {
		super();
	}
	get perimeter() {
		const res = super.perimeter;
		return res * 3;
	}
}