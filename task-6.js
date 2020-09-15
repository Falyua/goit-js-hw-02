let input = " ";
const numbers = [];
let total = 0;


while (input) {
  input = prompt('Введите любое число!');
  if(input == null) {
    alert('Отменено пользователем');
  } else {
    input = Number(input);

    if(!isNaN(input)){
      numbers.push(input);
      total += input;
    }

  }
}

console.log(numbers);
console.log(`Общая сумма чисел равна ${total}`);
