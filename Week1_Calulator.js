function getInput(prompt) {
    return new Promise((resolve) => {
        process.stdout.write(prompt); // Displays the prompt message to the user 
        process.stdin.once("data", (data) => { //waits for the user to enter the input
            resolve(data.toString().trim()); // Converts the input to a string and trims any extra spaces 
        });
    });
}

function add(num1, num2) { //Functions to define the four different operations.
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}
/*This function first prompts the user for input for their first number, mathematical operation and second number
  The second part of the function will actually preform the math operation by calling in the previously defined functions when needed.*/
  async function calculator() {
    const firstInput = await getInput("Enter the first number: ");
    const num1 = parseFloat(firstInput);

    const operation = await getInput("Choose an operation (+, -, *, /): ");

    const secondInput = await getInput("Enter the second number: ");
    const num2 = parseFloat(secondInput);

    var result; //This defines a variable called result
    switch (operation) { /*Creates a switch statement which compares user input to a number of conditions,
                           if one is met that block of code will be executed*/
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        default:
            result = "Error: Invalid operation selected";
    }

    console.log(`Result:` + result); //Prints the result

    process.stdin.pause();
}

// Run the calculator
calculator();
