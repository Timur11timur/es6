function getData(data) {
    var name = data.name;
    var age = data.age;

    console.log('My name is ' + name + '. My age ' + age);
}
getData({
    result: ['foo', 'bar'],
    count: 30,
    name: 'Karen',
    age: 25
})

function getDataTwo({name, age}) {
    console.log(`My name is ${name}! My age ${age}!`);
}
getDataTwo({
    result: ['foo', 'bar'],
    count: 30,
    name: 'Karen',
    age: 25
})