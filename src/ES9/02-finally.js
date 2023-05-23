
const promiseExample = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey!!'); 
        } else {
            reject('Whoooops!'); 
        }
    });
}


promiseExample()
    .then(response => console.log(response)) 
    .catch(error => console.log(error))
    .finally( () => console.log('Finally'));

