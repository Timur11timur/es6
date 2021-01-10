function User(username, email) {
    this.username = username;
    this.email = email;
}

User.prototype.changeEmail = function (newEmail) {
    this.email = newEmail;
}

var user = new User('Timur', 'tim@example.com');

user.changeEmail('foo@example.com');

console.dir(user);



class UserTwo {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    changeEmail(newEmail) {
        this.email = newEmail;
    }

    static someMethod() {
         return 'Can be callable only from class, or object, not from other methods';
    }

    get foo() {
        return 'foo';
    }

    set name(value) {
        this.username = value;
    }
}

let userTwo = new UserTwo('TimurTimur', 'timur@example.com')
userTwo.changeEmail('foobar@example.com');
console.dir(userTwo);
console.log(UserTwo.someMethod());
console.log(userTwo.foo);
userTwo.name = 'Name';
console.log(userTwo);



function log(strategy) {
    strategy.handle();
}

log(new class {
    handle() {
        alert('Strategy how to log.');
    }
})