


const [,,num1,operator,num2] = process.argv;

const calculator = function(i_Num1, i_Operator, i_Num2) {
  const a = parseFloat(i_Num1)
  const b = parseFloat(i_Num2)
  let result

  if (i_Operator === '+') result = a + b
  else if (i_Operator === '-') result = a - b
  else if (i_Operator === '*') result = a * b
  else if (i_Operator === '/') {
    if (b === 0) {
      console.log('Error: Division by zero')
      return
    }
    result = a / b
  } else {
    console.log('Error: Invalid operator')
    return
  }

  console.log(`${a} ${i_Operator} ${b} = ${result}`)
}