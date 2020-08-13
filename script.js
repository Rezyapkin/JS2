const os = require('os');
const moment = require('moment');
const fs = require('fs');
const http = require('http');
// const foo = require('./func');
const foo = require('./func');
// const { a } = require('./func');
// const foos = require('./func');

// foos.a();
// foos.b();

console.log(foo(10));
// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.write('Hello World!');
//         res.end();
//     }
//     if (req.url === '/api/users') {
//         fs.readFile('db.json', 'utf-8', (err, data) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.write(data);
//                 res.end();
//             }
//         });
//     }
// });

// server.listen(5555);

// const users = [{name: 'Ann', age: 25}];
//
// fs.writeFile('db.json', JSON.stringify(users), (err) => {
//     if (err) {
//         console.log(err);
//     }
// });
//
// fs.readFile('db.json', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         const list = JSON.parse(data);
//
//         list.push({name: 'Vasya', age: 20});
//
//         fs.writeFile('db.json', JSON.stringify(list), (err) => {
//             if (err) {
//                 console.log(err);
//             }
//         });
//     }
// });
// console.log(moment());
// console.log(os.platform());
// console.log(os.cpus());
