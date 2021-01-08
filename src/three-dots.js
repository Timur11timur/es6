function sum(...numbers) {
    return numbers.reduce((prev, current) => prev + current );
}
alert(sum (1, 2, 3));


let nums = [1, 2];
function sumTwo(x, y) {
    return x + y;
}
alert(sumTwo(...nums));