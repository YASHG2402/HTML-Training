document.write("Hii from JS File <br/>");

var name = "yash";
var i = 20;
var flag = true;

document.write(name + " : type of name is " + typeof(name));
document.write(i + " : type of i is " + typeof(i));
document.write(flag + " : type of flag is " + typeof(flag));

x = "test"
document.write(x + " :  type of x is " + typeof(x));

x = 100;
document.write(x + " :  type of x is " + typeof(x));

x = new Date()
document.write(x + " :  type of x is " + typeof(x)); 

function demoFunction() {

    a = 100
    console.log(a + " : type of a is " + typeof(a));

    a="user1"
    console.log(a + " : type of a is " + typeof(a));

    b=true;
    console.log(b + " : type of b is " + typeof(b));
}

demoFunction();

var person = {
    name:"Yash",
    address:"Andheri"
}
console.log(person + " type of person " + typeof(person));
console.log(person.name + " type of person " + typeof(person.name));
console.log(person.address + " type of person " + typeof(person.address));

var countries = ["INDIA", "USA", "UAE", "CHINA"];
console.log(countries.length);
console.log(countries[1]);

var result = Math.round(156.999);
console.log(result + " type of result " + typeof(result))


var a = 10, b=5;
var c = a > b ? a : b;
console.log(c);

var d = b > a ? b : a;
console.log(d);

var addNum = (x,y) =>console.log(x+y);

addNum(4,4);