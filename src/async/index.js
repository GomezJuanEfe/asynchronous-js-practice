const doSomethigAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Do something Async'), 3000)
            :reject(new Error('Test Error'))
    });
}

const doSomethig = async () => {
    const something = await doSomethigAsync();
    console.log(something);
}

console.log('Before');
doSomethig();
console.log('After');

const anotherFunction = async () => {
    try {
        const something = await doSomethigAsync();
        console.error(something)
    } catch (error) {
        console.error(error)
    }
}

console.log('Before 1');
doSomethig();
console.log('After 1');