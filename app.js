// TASK 1
// var itemArray = [{name:"juice", price:50, quantity:3},
//     {name:"cookie",price:30, quantity:9},
//     {name:"shirt",price:880, quantity:1},
//     {name:"pen",price:100, quantity:2}];
// var juice = itemArray[0].price * itemArray[0].quantity;
// var cookie = itemArray[1].price * itemArray[1].quantity;
// var shirt = itemArray[2].price * itemArray[2].quantity;
// var pen = itemArray[3].price * itemArray[3].quantity;
// console.log(juice);
// console.log(cookie);
// console.log(shirt);
// console.log(pen);
// console.log(juice+cookie+shirt+pen);

// TASK 2

// function Reg(name, email, password, age, gender, city, country) {
//     this.name = name;
//     this.email = email;
//     this.password = password;
//     this.age = age;
//     this.gender = gender;
//     this.city = city;
//     this.country = country;
// }
// var reg1 = new Reg("abc", "abc@g.com", "*****", 21, "m", "karachi", "pakistan");

// let result1 = reg1.hasOwnProperty('age');
// console.log(result1);
// let result2 = reg1.hasOwnProperty('country');
// console.log(result2);
// let result3 = reg1.hasOwnProperty('firstName');
// console.log(result3);
// let result4 = reg1.hasOwnProperty('lastName');
// console.log(result4);

//TASK 3
// function Reg(name, email, password, age, gender, city, country) {
//     this.name = name;
//     this.email = email;
//     this.password = password;
//     this.age = age;
//     this.gender = gender;
//     this.city = city;
//     this.country = country;
// }
// var reg1 = new Reg("Ahmed", "ahmed@g.com", "123456", 21, "m", "karachi", "pakistan");
// var reg2 = new Reg("Rehman", "rehman@g.com", "123456", 23, "m", "Islamabad", "pakistan");
// var reg3 = new Reg("Imran", "imran@g.com", "123456", 23, "m", "Lahore", "pakistan");
// console.log(reg1);

// TASK 4
var submit=document.getElementById("submit");
submit.addEventListener("click", function(e){
    e.preventDefault()
    let name = document.getElementsByClassName("name")
})


// function Reg(name, gender, address, education, profession) {
//     this.name = name;
//     this.gender = gender;
//     this.address = address;
//     this.education = education;
//     this.profession = profession;
// }
// function check() {
//     let name = document.getElementsByClassName("name")
//     name.value
// }



// var reg1 = new Reg("Ahmed", "m", "Karachi", "B.A", "Assistant");
// var reg2 = new Reg("Ayesha", "f", "Karachi", "MBBS", "Doctor");
// var reg3 = new Reg("Irfan", "m", "Karachi", "MBA", "Managing Director");
// console.log(reg1);