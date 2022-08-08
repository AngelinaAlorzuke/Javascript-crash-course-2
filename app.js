let num1 = 10;
let num2 = 20;
let num3 = 10;
let word1 = "Hello";
let word2 = "hello";

console.log(num1 < num2);
console.log(num1 > num2);
console.log(num1 <= num2);
console.log(num1 >= num2);
console.log(!true);
console.log(!false);
console.log(num1 == num3);
console.log(num1 === num3);
console.log(word1 !== word2); // equality check 

// CONTROL FLOW
let item = "Annapurna";
if (item === "Annapurna") {
    console.log("Buy Annapurna");
} else if (item === "U2") {
    console.log("Buy U2");
}
let em="milk";
if(em == "milk")
{
    console.log("buy milk")
}
else if(item == "milo")
{ 
    console.log("buy milo")


}
conditions


// functions[function identifier(parameter){function body}]
//  declaringfunction

product
function product(a,b){
    let total= a*b;
    return total;
}
let g=product(7,5);
console.log(g);

// default values
function product(a,b=2){
    let total= a*b;
    return total;
}
let j=product(7,3);
console.log(j);

// loops[for(in,off),while,do-while]
// for loop[for(initialization;condition;increment){body}]


// do-while loop
let age=1;
do{
    console.log(age + ".You can't vote");
    age++;

}while(age < 18);

// arrays /for(for of)


let ages = [19,28,45,13,27,16,42,17,19,50.39,10];
for(let age of ages){
    console.log(age);
}

 let ages = [19,28,45,13,27,16,42,17,19,50,39,10];
for(let age of ages){
    console.log(Math.pow(age,2));
}

//filter(removes from 'greater than the number' )
let marriage = ages.filter((num)=> num > 28);
console.log(marriage);


map
let squares = ages.map((age)=>age * age);
console.log(squares);

find
let n = ages.find((age) =>age ===16);
console.log(n);