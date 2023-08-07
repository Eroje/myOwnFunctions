const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo']

// Using map Method:

const shoutGreetings = arr => arr.map(word => word.toUpperCase() + '!');

/*
// Using a function declaration AND a loop:

function shoutGreetings(arr) {
    let shoutArray = []
    for(let i = 0; i<arr.length; i++){
        shoutArray.push(arr[i].toUpperCase() + '!')
    }
    return shoutArray
}
*/

console.log(shoutGreetings(greetings));