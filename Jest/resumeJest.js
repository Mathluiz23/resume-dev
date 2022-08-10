function sum(a, b) {
	return a + b;
}

const isValueNull = (value) => {
	if (value === "") {
		throw new Error("SummationOf deve receber um valor");
	}
};

const isValueNumber = (value) => {
	if (isNaN(value)) {
		throw new Error("SummationOf deve receber um número");
	}
};

const showSummation = (number) => {
	try {
		const summation = summationOf(number);
		return `A somatória de 1 até ${number} é ${summation}`;
	} catch (error) {
		return `Error: ${error.message}`;
	}
};

function summationOf(number) {
	isValueNull(number);
	isValueNumber(number);

	let sum = 0;
	for (let index = 1; index <= number; index++) {
		sum += index;
	}
	return sum;
}

console.log(showSummation(5));

module.exports = {
	sum,
	summationOf,
};
