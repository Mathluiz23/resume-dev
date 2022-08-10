// Implementando teste do arquivo resumeJest.js

const { sum, summationOf } = require("./resumeJest");

describe("Testa a função sum", () => {
	test("Espera que a soma de 1 e 2 seja igual a 3", () => {
		expect(sum(1, 2)).toBe(3);
	});
});

describe("Testa a função summationOf", () => {
	test("Espera que a funcção summationOf exista", () => {
		expect(typeof summationOf).toBe("function");
	});

	test("Espera que o somatório de 1 seja igual a 1", () => {
		expect(summationOf(1)).toBe(1);
	});

	test("Espera que o somatório de 1 a 3 seja igual a 6", () => {
		expect(summationOf(3)).toBe(6);
	});
});

test("Espera que o somatório de 1 a 5 seja igual a 15", () => {
	expect(summationOf(5)).toBe(15);
});
