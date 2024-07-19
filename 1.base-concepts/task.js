"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - 4 * a * c;
	if (d > 0) {
		console.log(`Дискриминант ${d} > 0, 2 корня`);
		let x1 = (-b + Math.sqrt(d)) / (2 * a);
		let x2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(x1, x2);
	} else if (d == 0) {
		console.log(`Дискриминант ${d} = 0, 1 корень`);
		let x1 = -b / (2 * a);
		arr.push(x1);
	} else if (d < 0) {
		console.log(`Дискриминант ${d} < 0, корней нет`);
	}
	console.log(arr);
	return arr;
}

solveEquation(1, 2, 4);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let per = parseInt(percent) / 100 / 12; //процентная ставка
	let con = parseInt(contribution); //начальный взнос 
	let am = parseInt(amount); //общая стоимость
	let cm = parseInt(countMonths); // срок кредита

	if (isNaN(per) || per < 0) {
		return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
	} else if (isNaN(con) || con < 0) {
		return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
	} else if (isNaN(am) || am < 0) {
		return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
	} else {
		if (isNaN(cm) || cm < 0) {
			return `Параметр "срок ипотеки" содержит неправильное значение ${countMonths}`;
		}
		let s = am - con; //тело кредита
		let pay = s * (per + per / (((1 + per) ** cm) - 1)); //ежемесячная оплата
		let totalAmount = (pay * cm).toFixed(2);
		console.log(totalAmount);
		return +totalAmount;
	}
}