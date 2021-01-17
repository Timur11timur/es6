function *numbers() {
    console.log('Start');
    yield 1;
    console.log('Center');
    yield 2;
    console.log('End');
    yield 3;
}

let iterator = numbers();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

console.log('----------------------');

function *range(start, end) {
    while(start <= end)
    {
        yield start;

        start ++;
    }
}

let iterator2 = range(2, 6);

for (let i of iterator2) {
    console.log(i);
}

console.log('///////////');

console.log(
    [...range(60, 65)]
);

