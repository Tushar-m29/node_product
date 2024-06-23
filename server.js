//For Appending File 
// var fs=require('fs');
// var os=require('os');

// var user=os.userInfo();
// console.log(user);

// fs.appendFile('greetings.txt',"Hi "+user.username+ "!\n", ()=>{
//      console.log("Executed...");
// })


//Lodash in npm
// const notes=require('./notes.js');
// var _=require('lodash');

// console.log("This is Server Page");
// var age=notes.age;
// var results=notes.add(5,7);

// console.log(results);
// console.log(age);

// var data=["person",1,2,3,"person",'name','age',2];
// var filter=_.uniq(data);
// console.log(filter);
// var answer='fall';
// console.log(_.isString(3));


//Server Json format of data Conversion from sting of Json to Json Obj vice versa
// const jsonString='{"name":"K Jones","age":24,"city":"New Jersy"}';
// const jsonObject=JSON.parse(jsonString);
// console.log(jsonObject);
// console.log(jsonObject.name);

const jsonObject={
    name:"Lebron James",
    age:34,
    hobby:"Playing BasketBall",
    job:"Sports Person"
}
const jsonString=JSON.stringify(jsonObject);
console.log(jsonString);
console.log(typeof(jsonString));