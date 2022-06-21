// declared variable to store intended user operation..
let operation = prompt("Pls enter arithmetic operation you want to carry out? \n Enter 1 for 'Addition'\n 2 for 'Subtraction'\n 3 for 'Division'\n 4 for 'Multiplication'\n");

// conditional statement to check if user input is within the listed operation option..
if (operation === "1" || operation === "2" || operation === "3" || operation === "4") {
    // Prompt user for first number
    let num1 = prompt("Enter the first number");
    // Prompt user for second number
    let num2 = prompt("Enter the second number");

    // converts inputed number to a float.
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    //  conditional statement to check if inputed value is a number
    if (isNaN(num1) || isNaN(num2)) {
        alert(`Must input numbers for both operand!!`);
    } else {
        if (operation === "1") {
            // Addition 
            function Addition(num1, num2) {
                return num1 + num2;
            }
            alert(`The result of ${num1} plus ${num2} is ${Addition(num1, num2)}`);
        }
    
        else if (operation === "2") {
            // subtraction
            function Subtraction(num1, num2) {
                return num1 - num2;
            }
            alert(`The result of ${num1} subtracts ${num2} is ${Subtraction(num1, num2)}`);
        }
    
        else if (operation === "3") {
            // Division
            function Division(num1, num2) {
                return num1 / num2;
            }
            alert(`The result of ${num1} divides ${num2} is ${Division(num1, num2)}`);
        }
    
        else if (operation === "4") {
            // Multiplication
            function Multiplication(num1, num2) {
                return num1 * num2;
            }
            alert(`The result of ${num1} multiplies ${num2} is ${Multiplication(num1, num2)}`);
        }      
    }

} else {
    // Error message for invalid operation.
    alert("wrong input!, enter a valid operation to carry out!");
}