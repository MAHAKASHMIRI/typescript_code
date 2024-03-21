console.log("apple"=="apple");//true
//console.log("apple"=="Apple");//false
 
console.log("testing with lower case");
console.log("Apple".toLowerCase()=="apple");
console.log("testing with uppercase");
console.log("apple".toUpperCase()=="APPLE");

console.log("numeric test");
console.log(6>9);//false
console.log(5>3);//true

console.log("test using AND ,OR operator");
console.log(5>3&&5<6);//true
console.log(4>5&&4<3);//false
console.log(7>9||7>4);//true

console.log("testing arrays");
let fruits=["mango","orange","kiwi"];
console.log("is 'apple'not in fruit?");
console.log(!fruits.include("apple"));

