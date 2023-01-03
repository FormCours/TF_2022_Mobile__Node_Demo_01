// ES5
function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.dire = function (message) {
    return `${this.firstname} ${this.lastname} dit ${message}`;
}


// ES2015+
class Person {

    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    dire(message) {
        return `${this.firstname} ${this.lastname} dit ${message}`;
    }
}