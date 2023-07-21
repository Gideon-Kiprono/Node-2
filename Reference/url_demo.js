const url = require("url");

const myUrl = new URL(
  "http://mywebsite.com:3000/hello.html?id=100&status=active"
);

//Serialised url
console.log(myUrl.href);
console.log(myUrl.toString());

//Host (root domain)
console.log(myUrl.host);

//Hostname ( Does not include port)
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Serialised path
console.log(myUrl.search);

//Search params object
console.log(myUrl.searchParams);

//Add params
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);

//Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}:${value}`));
