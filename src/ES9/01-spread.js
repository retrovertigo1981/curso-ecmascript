const user = {username: 'fuzzdev', age: 41, country: 'CL'};
const {username, ...values} = user;

console.log(username);
console.log(values);
