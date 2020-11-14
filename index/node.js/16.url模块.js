const url = require('url')


var obj = url.parse('http://127.0.0.1:3000/index.html?name=hollow&message=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E4%BD%A0%E7%9C%9F%E6%A3%92',true)
console.log(obj.query.name);
console.log(obj.query.message);

// Url {
//   protocol: 'http:',
//   slashes: true,
//   auth: null,
//   host: '127.0.0.1:3000',
//   port: '3000',
//   hostname: '127.0.0.1',
//   hash: null,
//   search: '?name=fdgd&message=gdfg',
//   query: 'name=fdgd&message=gdfg',
//   pathname: '/index.html',
//   path: '/index.html?name=fdgd&message=gdfg',
//   href: 'http://127.0.0.1:3000/index.html?name=fdgd&message=gdfg'
// }