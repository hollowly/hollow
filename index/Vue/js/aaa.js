var name = '小红';
var age = 18;
var flag = true;

function sum(num1, num2) {
    return num1 + num2;
}

if(flag) {
    console.log(sum(10, 20));
}

export {
    flag,
    name,
    age,
    sum,
}