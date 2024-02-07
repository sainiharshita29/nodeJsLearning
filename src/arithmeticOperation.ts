//write like below command npx ts-node src/arithmeticOperation.ts num1 num2 operator
//npx ts-node src/arithmeticOperation.ts 6 7 +

const num1:number = Number(process.argv[2]);
const num2:number = Number(process.argv[3]);
const operator = process.argv[4];
switch(operator){
    case '+' : console.log(`Addition result for ${num1} and ${num2}is`,num1 + num2);
    break;
    case '-' : console.log(`Subtraction result for ${num1} and ${num2}is`,num1 - num2)
    break;
    case 'mul' : console.log(`Multiplication result for ${num1} and ${num2}is`,num1 * num2)
    break;
    case '/' : console.log(`Division result for ${num1} and ${num2}is`,num1 / num2);
    break;
    case '%' : console.log(`Addition result for ${num1} and ${num2}is`,((num1 / num2) *100));
    break;
    default: console.log('no such operator found');break;
}
