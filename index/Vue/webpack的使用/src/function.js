

function add(num1, num2) {
    return num1 + num2;
}

function mul(num1, num2) {
    return num1 * num2;
}

// 使用 commonjs 规范导出
module.exports = {
    add,
    mul,
}