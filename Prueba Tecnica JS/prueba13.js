let firstOperand = parseInt(prompt("Introduce the first operand: "));
let secondOperand = parseInt(prompt("Introduce your 2nd operand: "));

let signArit = prompt("Introduce the arithmetic sign of the desired operation: ");


switch (signArit) {
    case "+":
        let addition = firstOperand + secondOperand;
        console.log("Your choice was addition. The result is: " + addition);
        break;
    case "-":
        let substractResult = firstOperand - secondOperand;
        console.log("Your choice was substraction. The result is " + substractResult);
        break;
    case "*":
        let multiplicationResult = (firstOperand * secondOperand);
        console.log("Your choice was multiplication. The result is " + multiplicationResult);
        break;
    case "/":
        let divisionResult = (firstOperand / secondOperand);
        console.log("Your choice was division. The result is " + divisionResult);
        break;
    case "^":ç
    
        let raisedToResult = (firstOperand ** secondOperand);
        console.log("Your choice was raise to. The result is " + raisedToResult);
        break;
    case "%":
        let moduleResult = (firstOperand % secondOperand);
        console.log("Your choice was module. The result is " + moduleResult);
        break;
    default:
        console.log("An error ocurred. Try again later");
        break;
}