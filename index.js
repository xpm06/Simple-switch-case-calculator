var a = prompt("whats ur first number?");
var b =prompt("whats ur second number?");
a = Number.parseInt(a);
b= Number.parseInt(b);
var op = prompt("whats ur operator?");
switch(op){
case('+'):console.log(a+b)
    break;
case('-'):console.log(a-b)
    break;
    case('*'):console.log(a*b)
    break;
    case('/'):console.log(a/b)
    break;
  default:console.log("Invalid Operator")
}

console.log("Thanks for using ;)")