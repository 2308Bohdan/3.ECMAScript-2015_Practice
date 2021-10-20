"use strict";
//Задание №2.
class GeometricFig {
	constructor() {
		this.__coordinCenterX = 0;
		this.__coordinCenterY = 0;
	}
	get coordinCenterX() {
		return this._coordinCenterX;
	}
	set coordinCenterX(num) {
		if (GeometricFig.validNumber(num)) {
			this._coordinCenterX = num;
		}
	}
	get coordinCenterY() {
		return this._coordinCenterY;
	}
	set coordinCenterY(num) {
		if (GeometricFig.validNumber(num)) {
			this._coordinCenterY = num;
		}
	}
	static validNumber(num) {
		if (typeof num === "number" && isFinite(num)) {
			return true;
		}
		return false;	
	}
}
//Прямоугольник
class Rectangle extends GeometricFig {
	constructor() {
		super();
		this.__lengthDiagonal = 0;
	}
	get lengthDiagonal() {
		return this.__lengthDiagonal;
	}
	set lengthDiagonal(num) {
		if (GeometricFig.validNumber(num)) {
			this.__lengthDiagonal = num;
		}
	}
	get info() {
	return `X: ${this.coordinCenterX}, Y: ${this.coordinCenterY}, Diagonal: ${this.lengthDiagonal}`;
	}
}
//Круг
class Circle1 extends GeometricFig {
	constructor() {
		super();
		this.__radiusCircle = 0;
	}
	get radiusCircle() {
		return this.__lengthDiagonal;
	}
	set radiusCircle(num) {
		if (GeometricFig.validNumber(num)) {
			this.__lengthDiagonal = num;
		}
	}
	get info() {
	return `X: ${this.coordinCenterX}, Y: ${this.coordinCenterY}, Diagonal: ${this.radiusCircle}`;
	}
}

const qwe = new Rectangle();
const asd = new Circle1();