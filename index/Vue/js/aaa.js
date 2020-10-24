

var name = '小红';
var age = 18;
var flag = true;

function sum(num1, num2) {
    return num1 + num2;
}

if(flag) {
    console.log('aaa.js打印',sum(10, 20));
}

// 1.导出方式一
export {
    flag,
    name,
    age,
    sum,
}

// 2.导出方式2

export var num1 = 1000;
export var height = 1.88;

// 3.导出函数/类

export function addnum(num1, num2) {
    return num1 * num2;
}

export class person {
    run() {
        console.log('在奔跑');
    };
    look() {
        console.log('在看');
    }
}


// 4.导出的时候可以让导出者自己命名
// const address = '北京市';
// export default  address;

export default function(aaa) {
    console.log(aaa);
}