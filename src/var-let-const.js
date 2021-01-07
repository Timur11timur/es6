function fireVar(bool) {
    if (bool) {
        var foo = 'bar';

        console.log(foo); //bar
    } else {
        console.log(foo); //undefined
    }
}
fireVar(false);

///////////////////////////////

function fireLet(bool) {
    if (bool) {
        let foo = 'bar';

        console.log(foo); //bar
    } else {
        console.log(foo); //ERROR!!!
    }
}
fireLet(false);

///////////////////////////////

const names = ['John', 'Susan'];

names.push('Sandy'); //['John', 'Susan', 'Sandy']

names = ['Tim', 'Carol']; //ERROR!!!