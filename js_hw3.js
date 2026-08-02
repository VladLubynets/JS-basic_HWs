 //Напишіть функцію яка буде генерувати певну кількість випадкових чисел в діапазоні від 100 до 1000 включно. 
 // Порахувати кількість парних та непарних серед них. Обчислити відсоткове співвідношення - чи буде воно близьке до 50%50? 
 // Приклад функції checkProbabilityTheory(count). Парметр count буде вказувати скільки разів буде генеруватися випадкове число.

function checkProbabilityTheory(count) {
  let evenCount = 0;
  let oddCount = 0;

  for (let i = 0; i < count; i++) {
    let number = Math.floor(Math.random() * 901) + 100;

    console.log(number);

    if (number % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  let evenPercent = evenCount / count * 100;
  let oddPercent = oddCount / count * 100;

  console.log("парних:", evenCount);
  console.log("непарних:", oddCount);

  console.log("відсоток парних", evenPercent );
  console.log("відсоток не парних:", oddPercent );
}

checkProbabilityTheory(100000);