// Async se recomienda por sobre promesas 
//porque hace que nuestro código se comporte 
// s í n c r o n o

// P R I M E R O  crear  promesa
const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        // Operarodes ternarios
            ? setTimeout(() => resolve('True - setTimeout'), 3000)
            : reject(new Error('Reject'))
    });
}

// async es una palabra reservada
const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log('doSomething - ' + something);
}

console.log('Before00 - doSomethingAsync');
doSomething();
console.log('After00 - doSomethingAsync');



const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync();
        console.log('anotherFunction - TRY - ' + something);
    } catch(error) {
        console.error(error)
    }
}

console.log('Before01 - anotherFunction');
anotherFunction();
console.log('After01 - anotherFunction');
