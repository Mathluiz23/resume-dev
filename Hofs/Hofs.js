const person = {
    name: 'Matheus Luiz',
    lastName: 'da Silva',
    
    greet: (name, callback) => {
        const greeting = callback(name);
        return greeting;
    }
};

const loveGreeting = (name) => {
    return `Olá ${name} querida que eu adoro!`;
};

const badMoodGreeting = (name) => {
    return `${name}, não me dê bom dia antes de eu tomar meu café!`;
};

// console.log(person.greet('Joana', badMoodGreeting))


// ________ HOFS_____________//

const numbers = [5, 10, 15, 20, 25, 30];

numbers.forEach((element, index, array) => {
    console.log(`Número do array é ${element} e sua posição no array é ${index}`);
    const el = array.pop(); // tira o ultimo elemento do array, ele percorre apaenas 3 vezes porque a cada posição que ele percorre ele retira o último elemento do array.
    console.log(el);
});





const multiplyby3WithForEach = () => {
    // forEach é necessário criar um novo array e acrescentar dentro do novo array os novos valores
    const newArray = [];
    numbers.forEach((element) => {
        const newNumber =  element * 3;
        newArray.push(newNumber);

    });
    return newArray;
};

console.log(multiplyby3WithForEach());


const multiplyby3WithMap = () => {
    // map retorna um novo array diretamente
    const newArray = numbers.map((element) => {
        return element * 3;
    });
    return newArray;
};

console.log(multiplyby3WithMap());

