const array = ['Ana', 'Alberto', 'Joana'];
const array2 = ['Luiz', 'Matheus', 'Kleber'];

// Imprimir cada elemento do array

for (let element of array) {
    console.log(element);
}

array.forEach((element)=> {
    console.log(element)
})

console.log(array.reduce((acc, currentValue) => {
    return `${acc} 
${currentValue}`;
}));


// Spread Operator
const newarray = [...array,...array2];
console.log(newarray)


// Destructuring

const bestPlayer = {
    nome: 'Cristiano Ronaldo',
    nickname: 'CR7',
    team: 'Manchester United',
    Nationality: 'Portuguese',
}

const { nome, nickname} = bestPlayer;
console.log(nome, nickname);


const description = ({ nome, nickname, team}) => {
    console.log(nome, nickname, team);
}
description(bestPlayer);