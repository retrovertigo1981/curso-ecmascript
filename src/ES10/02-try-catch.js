try {
    hello();
} catch (err) {
    console.log(err)
}

try {
    anotherFn();
} catch {
    console.log('Esto es un Error');
}