// window.alert("Hello");
// console.log("log");
// console.error("error");
// console.table(["dd","ww","aa"]);
// var a=2;
// var a = 3;
// let a=2;
// a = 3;
// console.log(a);
// var a=2;
// var a = 3;
// let a = "We Love";
// let b = "JavaScript";
// let c = "And";
// let d = "Programming";
// console.log(`${a} ${b} ${c} ${d}`);
// console.log(10+"alaa");
// console.log(10-"alaa");
// console.log(typeof NaN)
// console.log(20 / 5);
// console.log(20 / 3);
// console.log(10 % 2);
// console.log(11 % 2);
// let a = "100";
// let b = 20;
// let c = true;
// console.log(a + b + c)
// console.log(10 - +"")
// console.log(+false - +true)


// let myFriends = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]];
// console.log(`Hello ${myFriends[3][1][2]}`);
// console.log(myFriends)
// myFriends[1] = "Gamal";
// console.log(myFriends);
// console.log(Array.isArray(myFriends));
// let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];
// console.log(myFriends.length);
// myFriends.length = 2;
// console.log(myFriends);
// let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

// console.log(myFriends);

// myFriends.unshift("Osama", "Nabil");

// console.log(myFriends);
// myFriends.push("Samah", "Eman");

// console.log(myFriends);

// let first = myFriends.shift();

// console.log(myFriends);

// let last = myFriends.pop();

// console.log(myFriends);

// console.log(`Last Name Is ${last}`);
// let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];
// console.log(myFriends);
// console.log(myFriends.indexOf("Ahmed"));
// console.log(myFriends.lastIndexOf("Ahmed"));
// console.log(myFriends.lastIndexOf("Ahmed", -2));
// console.log(myFriends.includes("Ahmed"));
// console.log(myFriends.includes("Ahmed", 2));
// if (myFriends.lastIndexOf("Osama") === -1) {
//     console.log("Not Found");
//   }
//   console.log(myFriends.indexOf("Osama"));
// console.log(myFriends.lastIndexOf("Osama"));

// let myFriends = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];

// console.log(myFriends);
// console.log(myFriends.sort().reverse());
// let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
// console.log(myFriends);
// console.log(myFriends.slice());
// console.log(myFriends.slice(1));
// console.log(myFriends.slice(1, 3));
// console.log(myFriends.slice(-3));
// console.log(myFriends.slice(1, -2));
// console.log(myFriends.slice(-4, -2));
// console.log(myFriends);
// myFriends.splice(1, 2, "Sameer", "Samara");

// console.log(myFriends);

// let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
// let myNewFriends = ["Samar", "Sameh"];
// let schoolFriends = ["Haytham", "Shady"];

// let allFriends = myFriends.concat(myNewFriends, schoolFriends, "Gameel", [1, 2]);

// console.log(allFriends);

// console.log(allFriends.join());
// console.log(allFriends.join(""));
// console.log(allFriends.join(" @ "));
// console.log(allFriends.join("|"));
// console.log(allFriends.join("|").toUpperCase());
// for (let i = 0; i < 10; i++) {
//     console.log(i);
//   }
// let myFriends = [1, 2, "Osama", "Ahmed", 3, 4, "Sayed", 6, "Ali"];

// let onlyNames = [];

// for (let i = 0; i < myFriends.length; i++) {
//   if (typeof myFriends[i] === "string") {
//     onlyNames.push(myFriends[i]);
//   }
// }
// console.log(onlyNames);


// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

// let colors = ["Red", "Green", "Black"];

// let models = [2020, 2021];

// for (let i = 0; i < products.length; i++) {
//   console.log("#".repeat(15));
//   console.log(`# ${products[i]}`);
//   console.log("#".repeat(15));
//   console.log("Colors: ");
//   for (let j = 0; j < colors.length; j++) {
//     console.log(`- ${colors[j]}`);
//   }
//   console.log("Models: ");
//   for (let k = 0; k < models.length; k++) {
//     console.log(`- ${models[k]}`);
//   }
// }
// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

// let colors = ["Red", "Green", "Black"];
// mainLoop: for (let i = 0; i < products.length; i++) {
//     console.log(products[i]);
//     nestedLoop: for (let j = 0; j < colors.length; j++) {
//       console.log(`- ${colors[j]}`);
//       if (colors[j] === "Green") {
//         break mainLoop;
//       }
//     }
//   }

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
// let i = 0;

// for (;;) {
//   console.log(products[i]);
//   i++;
//   if (i === products.length) break;
// }
// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

// let index = 0;

// while (index < products.length) {
//   console.log(products[index]);
//   index += 1;
// }

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

// let i = 0;

// do {
//   console.log(i);
//   i++;
// } while (false);

// console.log(i);

// function sayHello(username)
// {
//     console.log(`Hello ${username}`);
// }
// sayHello("Osama");
// sayHello("Sayed");
// sayHello("Ali");s

// function sayHello(userName, age) {
//     if (age < 20) {
//       console.log(`App is Not Suitable For You`);
//     } else {
//       console.log(`Hello ${userName} Your Age is ${age}`);
//     }
//   }
  
//   sayHello("Osama", 38);
//   sayHello("Sayed", 40);
//   sayHello("Ali", 18);

// function generateYears(start, end, exclude) {
//     for (let i = start; i <= end; i++) {
//       if (i === exclude) {
//         continue;
//       }
//       console.log(i);
//     }
//   }
  
//   generateYears(1982, 2021, 2020);

// function generate(start, end) {
//     for (let i = start; i <= end; i++) {
//       if (i === 15) {
//         return `Interrupting`;
//       }
//       console.log(i);
//     }
//   }
  
//   console.log(generate(10, 20));

// function sayHello(username , age) {
//     if (age === undefined) {
//       age = "Unknown";
//     }
//     username= username|| "Unknown";
//     return `Hello ${username} Your Age Is ${age}`;
//   }
  
//   console.log(sayHello());

// function calc(...numbers)
// {
//     let result =0;
//     for(let i=0; i<numbers.length; i++)
//     {
//         result += numbers[i];
//     }
//     return `The Final Result is ${result}`;
// }
// console.log(calc(10,20,30,40,50));


// function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
//     document.write(`<div>`);
//     document.write(`<h2>Welcome, ${us}</h2>`);
//     document.write(`<p>Age: ${ag}</p>`);
//     document.write(`<p>Hour Rate: $${rt}</p>`);
//     if (show === "Yes") {
//       if (sk.length > 0) {
//         document.write(`<p>Skills: ${sk.join(" | ")}</p>`);
//       } else {
//         document.write(`<p>Skills: No Skills</p>`);
//       }
//     } else {
//       document.write(`<p>Skills Is Hidden</p>`);
//     }
//     document.write(`</div>`);
//   }
  
//   showInfo("Osama", 38, 20, "Yes", "Html", "CSS");

// let calculator = function(num1, num2)
// {
//     return num1 + num2;
// }

// console.log(calculator(10,20))

// setTimeout(function elzero() {
//     console.log("Good");
//   }, 20000);

// function sayMessage(fName, lName) {
//     let message = `Hello`;
//     // Nested Function
//     function concatMsg() {
//       message = `${message} ${fName} ${lName}`;
//     }
//     concatMsg();
//     return message;
//   }
//   console.log(sayMessage("Osama", "Mohamed"));


// function sayMessage(fName, lName) {
//     let message = `Hello`;
//     // Nested Function
//     function concatMsg() {
//       return `${message} ${fName} ${lName}`;
//     }
//     return concatMsg();
//   }
  
//   console.log(sayMessage("Osama", "Mohamed"));

// function sayMessage(fName, lName) {
//     let message = `Hello`;
//     // Nested Function
//     function concatMsg() {
//       function getFullName() {
//         return `${fName} ${lName}`;
//       }
//       return `${message} ${getFullName()}`;
//     }
//     return concatMsg();
//   }
  
//   console.log(sayMessage("Osama", "Mohamed"));

// function print(){
//     return 10;
// }
// console.log(print());

// let print = () =>{
//     let a =10;
//     return a;
// }

// let print = _ =>  10;

// console.log(print());

// let print = (num1, num2) =>
// {
//     return num1+num2;
// } 

// console.log(print(10,20));

// var a = 1;
// let b = 2;

// function showText() {
//   var a = 10;
//   let b = 20;
//   console.log(`Function - From Local ${a}`);
//   console.log(`Function - From Local ${b}`);
// }

// console.log(`From Global ${a}`);
// console.log(`From Global ${b}`);

// showText();

// var x = 10;

// if (10 === 10) {
//   let x = 50;
//   console.log(`From If Block ${x}`);
// }

// console.log(`From Global ${x}`);

// function parent() {
//     let a = 10;
  
//     function child() {
//       let b = 100;
//       console.log(a);
//       console.log(`From Child ${b}`);
  
//       function grand() {
        
//         console.log(`From Grand ${a}`);
//         console.log(`From Grand ${b}`);
//       }
//       grand();
//     }
//     child();
//   }
//   parent();

// let user = {
//     // Properties
//     theName: "Osama",
//     theAge: 38,
//     // Methods
//     sayHello: function()
//     {
//         return `Hello`;
//     }
// };
// console.log(`${user.sayHello()} ${user.theName} your  age is ${user.theAge}`);

// let myVar = "country";
// let user = {
//     theName:"Alaa",
//     country: "Yemen"
// };
// console.log(user.theName);
// console.log(user.country);
// console.log(`${user["theName"]}`);
// // console.log(`${user["country"]}`)
// console.log(`${user[myVar]}`);


// let user = {
//     name: "Osama",
//     age: 38,
//     skills: ["HTML", "CSS", "JS"],
//     available: false,
//     addresses: {
//         ksa: "Riyadh",
//         egypt: {
//             one: "Cairo",
//             two: "Giza",
//         },
//     },
//     checkAv: function () {
//         if (user.available === true) {
//           return `Free For Work`;
//         } else {
//           return `Not Free`;
//         }
//     }
// };
// console.log(user.name);
// console.log(user.age);
// console.log(user.skills);
// console.log(user.skills.join(" | "));
// console.log(user.skills[2]);
// console.log(user.addresses.ksa);
// console.log(user.addresses.egypt.one);
// console.log(user["addresses"].egypt.one);
// console.log(user["addresses"]["egypt"]);
// console.log(user["addresses"]["egypt"]["one"]);
// let user = new Object({
//     age: 20
// });
// user.age=38;
// user["country"] = "Yemen";
// user.sayHello = function(){
//     return `Hello`
// }

// console.log(user)
// console.log(user["age"]);
// console.log(user.country);
// console.log(`${user.sayHello()}`);

// console.log(this);
// console.log(this === window);
// myVar = 100;

// console.log(window.myVar);
// console.log(this.myVar);
// function sayHello() {
//     console.log(this);
//     return this;
//   }
//   sayHello();
//   console.log(sayHello() === window);

//   let user = {
//     age: 38,
//     ageInDays: function () {
//       console.log(this);
//       return this.age * 365;
//     },
//   };
  
//   console.log(user.age);
//   console.log(user.ageInDays());


// let obj = Object.create({
//     a: 100,
//     doubleAge: function () {
//     return this.age * 2;
//     }
// });


// // console.log(obj.name)
// let copobj = Object.create(obj);
// copobj.age = 20;
// console.log(copobj)
// console.log(copobj.doubleAge());

// let obj1 = {
//     prop1: 1,
//     meth1: function () {
//       return this.prop1;
//     },
//   };
  
//   let obj2 = {
//     prop2: 2,
//     meth2: function () {
//       return this.prop2;
//     },
//   };
  
//   let targetObject = {
//     prop1: 100,
//     prop3: 3,
//   };
  
//   let finalObject = Object.assign(targetObject, obj1, obj2);
//   console.log(targetObject);
//   console.log(finalObject);
//   finalObject.prop1 = 200;
//   finalObject.prop4 = 4;

// console.log(finalObject);

// let newObject = Object.assign({},obj1,{prop5:5, prop6: 6});
// console.log(newObject)



// const myJsonObjectFromServer = '{"Username": "Alaa", "Age": 26}';
// console.log(typeof myJsonObjectFromServer);
// console.log(myJsonObjectFromServer);
// const myobj = JSON.parse(myJsonObjectFromServer);
// console.log(typeof myobj);
// console.log(myobj);
// myobj["Username"] = "Mohammed";
// myobj["Age"] = 20;
// const myJsonObjectToServer = JSON.stringify(myobj);
// console.log(typeof myJsonObjectToServer);
// console.log(myJsonObjectToServer);
// // const myobj = JSON.stringify(myJsonObjectFromServer);
// // const myobj2 = JSON.parse(myobj);
// // console.log(typeof myobj2);
// // console.log(myobj2);
// console.log("1");
// console.log("2");
// window.alert("Operation");
// console.log("3");


// console.log("1");
// console.log("2");
// setTimeout(() => console.log("Operation"),4000)
// console.log("3");
// setTimeout(() => console.log("Web API"),0);
// function one() {
//     console.log("One");
//   }
//   function two() {
//     one();
//     console.log("Two");
//   }
//   function three() {
//     two();
//     console.log("Three");
//   }
  
//   three();

// console.log("One");
// setTimeout(() => console.log("Three"),0);
// setTimeout(() => console.log("Four"), 0);
// console.log("Two");
// setTimeout(() => console.log(myVar), 0);
// let myVar = 100;
// myVar += 100;

// let req = new XMLHttpRequest();
// console.log(req);

// let myRequest = new XMLHttpRequest();
// myRequest.open("GET","https://api.github.com/users/AlaaAldeenBK/repos", true);
// myRequest.send();
// console.log(myRequest);
// myRequest.onreadystatechange = function()
// {
//     console.log(myRequest.readyState);
//     console.log(myRequest.status);
//     if(this.readyState === 4 && this.status === 200)
//     {
//         console.log(this.responseText)
//     }
// }
// let myRequest = new XMLHttpRequest();
// myRequest.open("GET", "https://api.github.com/users/AlaaAldeenBK/repos");
// myRequest.send();
// myRequest.onreadystatechange = function()
// {
//     if(this.readyState === 4 && this.status === 200)
//     {
//         let jsData = JSON.parse(this.responseText);
//         // console.log(jsData);
//         for(let i = 0; i<jsData.length; i++)
//         {
//             let div = document.createElement("div");
//             let repoName = document.createTextNode(jsData[i].full_name);
//             div.appendChild(repoName);
//             document.body.appendChild(div);
//         }
//     }
// }















































































































































