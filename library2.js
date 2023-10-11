let lib = require('./library3')

function getString() {
    let message = getString2() + lib3.getString()
    return message;
}

function getString2() {
    return "hi from library 2"
}