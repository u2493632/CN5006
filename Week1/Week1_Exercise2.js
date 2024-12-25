const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter a number: ", (input) => {
    const number = parseInt(input);

    if (number > 0) {
        console.log("The number is positive");
    } else if (number === 0) {
        console.log("The number is zero");
    } else {
        console.log("The number is negative");
    }

    readline.close();
});
