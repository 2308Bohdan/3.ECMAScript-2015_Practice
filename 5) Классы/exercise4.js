"use strict";
//Задание №4.
class Circle {
	constructor(numX, numY, radius) {
		if (Circle.validNumber(numX)) {
			this._coordinCenterX = numX;
		} else {
			throw new Error("Value incorrect!");
		}
		if (Circle.validNumber(numY)) {
			this._coordinCenterY = numY;
		} else {
			throw new Error("Value incorrect!");
		}
		if (Circle.validNumber(radius)) {
			this._radius = radius;
		} else {
			throw new Error("Value incorrect!");
		}
	}
	get length() {
		const PI = 3.14;
		return 2 * PI * this._radius;
	}
	get copyObj() {
		return Object.assign({}, this) 
	}
	checkPointInCircle(pointX, pointY) {
		if (Circle.validNumber(pointX) && Circle.validNumber(pointY)) {
			//по честному - формулу нашел в инете
			if (Math.pow(this._coordinCenterX - pointX, 2) + Math.pow(this._coordinCenterY - pointY, 2) <= Math.pow(this._radius, 2)) {
				return true;
			}
			return false;
		}
	}
	toString() {
		return `Сenter of circle x:${this._coordinCenterX} y:${this._coordinCenterY}, radius ${this._radius}`;
	}
	static lengthCalc(value) {
		if (Circle.validNumber(value)) {
			const PI = 3.14;
			return 2 * PI * value;
		}
	}
	static createNewCircle(numX, numY, radius) {
		if (Circle.validNumber(numX) && Circle.validNumber(numY) && Circle.validNumber(radius)) {
			const obj = new Circle(numX, numY, radius)
			return obj;
		}
	}
	static validNumber(value) {
		if (typeof value === "number" && isFinite(value)) {
			return true;
		}
		return false;
	}
}