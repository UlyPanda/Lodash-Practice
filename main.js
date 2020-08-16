const fetch = require('node-fetch'); 
const _ = require('lodash');

const toDoInfo = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => console.log(json))
}
const arr = ['A', 'b', 'c', 'd', 'u', 'x', 'r'];
// _.shuffle(arr);
// console.log(_.shuffle(arr));
// _.shuffle(toDoInfo);

const chunked = _.chunk(['a', 'b', 'c', 'd', 'u', 'x', 'r'], 2);
// console.log(chunked);

// console.log(_.reverse(arr));
// console.log(_.without(['a', 'b', 'c', 'd', 'e', 'f'], 'f', 'a'));
console.log(_.tail(arr));