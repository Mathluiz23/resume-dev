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



/* ---------------------------------ForEach-------------------------------------------*/
numbers.forEach((element, index, array) => {
    // console.log(`Número do array é ${element} e sua posição no array é ${index}`);
    const el = array.pop(); // tira o ultimo elemento do array, ele percorre apaenas 3 vezes porque a cada posição que ele percorre ele retira o último elemento do array.
    // console.log(el);
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

// console.log(multiplyby3WithForEach());
/* ---------------------------------ForEach-------------------------------------------*/



/* ---------------------------------Map-------------------------------------------*/
const multiplyby3WithMap = () => {
    // map retorna um novo array diretamente
    const newArray = numbers.map((element) => {
        return element * 3;
    });
    return newArray;
};

// console.log(multiplyby3WithMap());
/* ---------------------------------Map-------------------------------------------*/



const users = [
    { firstName: 'Homer', lastName:'Simpson', isDriver: true },
    { firstName: 'Marge', lastName:'Simpson', isDriver: true },
    { firstName: 'Bart', lastName:'Simpson', isDriver: false },
    { firstName: 'Lisa', lastName:'Simpson', isDriver: false },
    { firstName: 'Maggie', lastName:'Simpson', isDriver: false },
];

/* ---------------------------------Find-------------------------------------------*/
// Find retorna o primeiro elemento que satisfaça a condição
const driver = users.find((user) => {
    return user.isDriver === true ;
})

// console.log(driver);
/* ---------------------------------Find-------------------------------------------*/


/* ---------------------------------Some-------------------------------------------*/
const driverSome = users.some((user) => {
    // tem algum usuário que é motorista, retorna true ou false
    return user.isDriver;
}) 

// console.log(driverSome);
/* ---------------------------------Some-------------------------------------------*/


/* ---------------------------------Every-------------------------------------------*/

const driverEvery = users.every((user) => {
    // Verifica se todos os usuários satisfaçam a condição e retorna true ou false
    // Se todos foram isDriver true retorna true, caso algum deles não seja retorna false
    return user.isDriver;
}) 

// console.log(driverEvery);

/* ---------------------------------Every-------------------------------------------*/

/* ---------------------------------Sort-------------------------------------------*/
const numbersRandom = [3, 1, 25, 6, 21, 12, 7, 5]

 const orderNumbers = () => {
    //  return numbersRandom.sort(); desta maneira ele não retorna de forma certa pois considera como string
    //  retorno será isso: [ 1, 12, 21, 25, 3,  5,  6,  7];

    // Maneira correta:
    return numbersRandom.sort((a, b) => {
        // console.log(a, b);
        return a - b;
    })
 }

// console.log(orderNumbers());

/* ---------------------------------Sort-------------------------------------------*/


/* ---------------------------------Filter-------------------------------------------*/

function isBigEnough(value) {
    return value >= 10;
  }
  
  var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
  // filtrado é [12, 130, 44]
//   console.log(filtered);


  const numberss = [1,2,3,4,5];

//   sem filter
  const filterOddWithFor = (array) => {
      let newArray = [];

      for (let count = 0; count < array.length; count += 1) {
          if (array[count] % 2 !== 0) {
            newArray.push(array[count])
          };
      };
      return newArray;
  };

  console.log(filterOddWithFor(numberss))

  
  //   mesma função com filter
  const filterOdd = (array) => {
      const arrayFiltered = array.filter((number) => {
          return number % 2 !== 0;
      })
      return arrayFiltered;
  }
  console.log(filterOdd(numberss))
  

/* ---------------------------------Filter-------------------------------------------*/